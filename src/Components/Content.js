import { Switch, Route } from 'react-router-dom';
import { firebaseConfig } from '../Config/Config';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import { useState, useEffect } from 'react';


import { Home } from './Home'
import { About } from './About'
import { Register } from './Register'
import { Login } from './Login';
import { Logout } from './Logout';
import { AddCocktail } from './Admin/AddCocktail';
import { AddIngredient } from './Admin/AddIngredient';
import { Cocktail } from './Cocktails';
import { CocktailsDetail } from './CocktailsDetail';
import { IngredientsDetail } from './IngredientsDetail';

export function Content(props) {
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState()
  const [ cocktailData, setCocktailData ] = useState()
  const [ ingredientData, setIngredientData ] = useState()

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  useEffect( () => {
    if( !cocktailData ) {
      readCocktailsData()
      .then( ( data ) => {
        console.log(data)
        setCocktailData( data )
      })
      .catch( (error) => console.log(error) )
    }
  }, [cocktailData])

  useEffect( () => {
    if( !ingredientData ) {
      readIngredientsData()
      .then( ( data ) => {
        console.log(data)
        setIngredientData( data )
      })
      .catch( (error) => console.log(error) )
    }
  }, [ingredientData])

  const db = firebase.firestore()

  const addCocktail = ( data ) => {
    return new Promise( ( resolve,reject) => {
      db.collection('Cocktails').add( data )
      .then( () => resolve( true ) )
      .catch( (error) => reject(error) )
    })
  }
  const addIngredient = ( data ) => {
    return new Promise( ( resolve,reject) => {
      db.collection('Ingredients').add( data )
      .then( () => resolve( true ) )
      .catch( (error) => reject(error) )
    })
  }

  const addUser = ( data ) => {
    return new Promise( ( resolve,reject) => {
      db.collection('Users').add( data )
      .then( () => resolve( true ) )
      .catch( (error) => reject(error) )
    })
  }

  const readCocktailsData = () => {
    return new Promise( (resolve,reject) => {
      db.collection('Cocktails').onSnapshot( (querySnapshot) => {
        let cocktails = []
        querySnapshot.forEach( (doc) => {
          let cocktail = doc.data()
          cocktail.id = doc.id
          cocktails.push( cocktail )
        })
        resolve( cocktails )
      })
    })
  }
  const readIngredientsData = () => {
    return new Promise( (resolve,reject) => {
      db.collection('Ingredients').onSnapshot( (querySnapshot) => {
        let ingredients = []
        querySnapshot.forEach( (doc) => {
          let ingredient = doc.data()
          ingredient.id = doc.id
          ingredients.push( ingredient )
        })
        resolve( ingredients )
      })
    })
  }

  const getCocktailsDetail = ( id ) => {
    return new Promise( (resolve,reject) => {
      db.collection('Cocktails').doc(id).get()
      .then( ( doc ) => {
          resolve( doc.data() )
      })
      .catch((error) => reject( error ))
    })
  }
  const getIngredientsDetail = ( id ) => {
    return new Promise( (resolve,reject) => {
      db.collection('Ingredients').doc(id).get()
      .then( ( doc ) => {
          resolve( doc.data() )
      })
      .catch((error) => reject( error ))
    })
  }

  const storage = firebase.storage()

  // example path 'cocktails/covers/image1.jpg'
  const addImage = ( path, image ) => {
    return new Promise( (resolve,reject) => {
      storage.ref( path ).put(image)
      .then(() => {
        storage.ref( path ).getDownloadURL()
        .then(( url ) => resolve(url) )
        .catch((errors) => reject(errors) )
      })
      .catch( (errors) => reject(errors) )
    })
  }

  const registerUser = (email, password, userName, name) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // do something with the user object
        //console.log( userCredential.user.uid )
        //addUser(userName, name)

        setUser(userCredential.user)
        setAuth(true)
        props.authHandler(true)
      })
      .catch((error) => {
        // do something with the error
        console.log(error)
      })
  }


  const loginUser = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
        setAuth(true)
        props.authHandler(true)
      })
      .catch((error) => {
        // do something with the error
        console.log(error)
      })
  }

  const logoutUser = () => {
    firebase.auth().signOut()
      .then(() => {
        // do something after signout
        setUser(null)
        setAuth(false)
        props.authHandler(false)
      })
  }



  return (
    <div className="container">
      <br></br>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktails">
          <Cocktail data={cocktailData} />
        </Route>
        <Route path="/ingredients">
          <Cocktail data={ingredientData} />
        </Route>
        <Route path="/register">
          <Register handler={registerUser} />
        </Route>
        <Route path="/login">
          <Login handler={loginUser} />
        </Route>
        <Route path="/logout">
          <Logout handler={logoutUser} />
        </Route>
        <Route path="/addCocktails">
          <AddCocktail handler={addCocktail} imageHandler={addImage} />
        </Route>
        
        <Route path="/cocktail/:cocktailId">
          <CocktailsDetail handler={getCocktailsDetail} />
        </Route>
        
        <Route path="/addIngredients">
          <AddCocktail handler={addIngredient} imageHandler={addImage} />
        </Route>
        <Route path="/ingredient/:ingredientId">
          <IngredientsDetail handler={getIngredientsDetail} />
        </Route>
      </Switch>
    </div>
  )
}