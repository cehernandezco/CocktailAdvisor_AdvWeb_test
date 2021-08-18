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
import { AddPlace } from './Admin/AddPlace';
import { Cocktail } from './Cocktails';
import { Ingredient } from './Ingredients';
import { Place } from './Places';
import { CocktailsDetail } from './CocktailsDetail';
import { IngredientsDetail } from './IngredientsDetail';
import { PlacesDetail } from './PlacesDetail';

export function Content(props) {
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState()

  const [ cocktailData, setCocktailData ] = useState()
  const [ ingredientData, setIngredientData ] = useState()
  const [ placeData, setPlaceData ] = useState()

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  useEffect(() => {
    if (!cocktailData) {
      readCocktailsData()
        .then((data) => {
          console.log(data)
          setCocktailData(data)
        })
        .catch((error) => console.log(error))
    }
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuth(true)
        setUser(user)
        props.authHandler(true)
      }
      else {
        setAuth(false)
        setUser(null)
        props.authHandler(false)
      }
    })
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

  useEffect( () => {
    if( !placeData ) {
      readPlacesData()
      .then( ( data ) => {
        console.log(data)
        setPlaceData( data )
      })
      .catch( (error) => console.log(error) )
    }
  }, [placeData])

  const db = firebase.firestore()

  const addCocktail = (data) => {
    return new Promise((resolve, reject) => {
      db.collection('Cocktails').add(data)
        .then(() => resolve(true))
        .catch((error) => reject(error))
    })
  }
  const addIngredient = ( data ) => {
    return new Promise( ( resolve,reject) => {
      db.collection('Ingredients').add( data )
      .then( () => resolve( true ) )
      .catch( (error) => reject(error) )
    })
  }
  const addPlace = ( data ) => {
    return new Promise( ( resolve,reject) => {
      db.collection('Places').add( data )
      .then( () => resolve( true ) )
      .catch( (error) => reject(error) )
    })
  }

  const addUser = (data) => {
    return new Promise((resolve, reject) => {
      db.collection('Users').add(data)
        .then(() => resolve(true))
        .catch((error) => reject(error))
    })
  }

  const readCocktailsData = () => {
    return new Promise((resolve, reject) => {
      db.collection('Cocktails').onSnapshot((querySnapshot) => {
        let cocktails = []
        querySnapshot.forEach((doc) => {
          let cocktail = doc.data()
          cocktail.id = doc.id
          cocktails.push(cocktail)
        })
        resolve(cocktails)
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

  const readPlacesData = () => {
    return new Promise( (resolve,reject) => {
      db.collection('Places').onSnapshot( (querySnapshot) => {
        let places = []
        querySnapshot.forEach( (doc) => {
          let place = doc.data()
          place.id = doc.id
          places.push( place )
        })
        resolve( places )
      })
    })
  }

  const getCocktailsDetail = (id) => {
    return new Promise((resolve, reject) => {
      const ref = db.collection('Cocktails').doc(id)
        ref.get()
        .then( (response) => {
          let cocktail = response.data()
          // get all the ingredients
          ref.collection( 'Ingredients' ).get()
            .then( (items) => {
              let ingredients = []
              items.forEach( (item) => {
                ingredients.push( item.data() )
              })
              // add ingredients array as cocktail.ingredients
              cocktail.ingredients = ingredients
              resolve(cocktail)
            })
          console.log(cocktail)
        })
        .catch((error) => reject(error))
    })
  }
  const addReview = ( data ) => {
    return new Promise( (resolve,reject) => {
      console.log( data )
      // create a ref for cocktail being reviewed
      db.collection('Reviews').add( data )
      .then( (docRef) => {
        const ref = db.doc(docRef.path)
        const reviewRef = { path: ref }
        // add ref to users
        db.collection('Users').doc(data.userId).collection('Reviews').add(reviewRef)
        .then( () => {
          resolve(true)
        })
        .catch( (error) => reject(error) )
      })
      .catch( error => reject(error) )
    })
  }

  // get reviews for a cocktail
  const getCocktailReviews = ( cocktailId ) => {
    return new Promise( (resolve,reject) => {
      db.collection('Reviews').where('cocktail', "==", cocktailId ).get()
      .then( (res) => {
        let reviews = []
        res.forEach( (doc) => {
          let review = doc.data()
          reviews.push( review )
        })
        resolve( reviews )
      })
      .catch( (error) => {
        reject( error )
      })
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

  const getPlacesDetail = ( id ) => {
    return new Promise( (resolve,reject) => {
      db.collection('Places').doc(id).get()
      .then( ( doc ) => {
          resolve( doc.data() )
      })
      .catch((error) => reject( error ))
    })
  }

  const storage = firebase.storage()

  // example path 'cocktails/covers/image1.jpg'
  const addImage = (path, image) => {
    return new Promise((resolve, reject) => {
      storage.ref(path).put(image)
        .then(() => {
          storage.ref(path).getDownloadURL()
            .then((url) => resolve(url))
            .catch((errors) => reject(errors))
        })
        .catch((errors) => reject(errors))
    })
  }

  const registerUser = (username, email, password) => {
    return new Promise( (resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // set user's username
        userCredential.user.updateProfile({displayName: username})
        // add user in the database
        const userData = {name: username, email: email, created: new Date() }
        db.collection('Users').doc(userCredential.user.uid).set(userData)
        .then( (res) => {
          console.log( res)
          setUser(userCredential.user)
          setAuth(true)
          props.authHandler(true)
          resolve( true )
        })
      })
      .catch((error) => {
        reject( error )
      })
    })
  }


  const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
        setAuth(true)
        props.authHandler(true)
        resolve( true )
      })
      .catch((error) => {
        // do something with the error
        console.log(error)
        reject( error )
      })
    })
  }

  const logoutUser = () => {
    return new Promise( (resolve,reject) => {
      firebase.auth().signOut()
      .then(() => {
        // do something after signout
        setUser(null)
        setAuth(false)
        props.authHandler(false)
        resolve( true )
      })
      .catch((error) => reject(false) )
    })
  }



  return (
    <div className="container">
      <br></br>
      <Switch>
        <Route exact path="/">
          <Home auth={auth} user={user}/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktails">
          <Cocktail data={cocktailData} />
        </Route>
        <Route path="/ingredients">
          <Ingredient data={ingredientData} />
        </Route>
        <Route path="/places">
          <Place data={placeData} />
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
          <CocktailsDetail 
            handler={getCocktailsDetail} 
            auth={auth} 
            reviewHandler={addReview} 
            user={user}
            getReviews={getCocktailReviews}
            />
        </Route>
        
        <Route path="/addIngredients">
          <AddIngredient handler={addIngredient} imageHandler={addImage} />
        </Route>
        <Route path="/ingredient/:ingredientId">
          <IngredientsDetail handler={getIngredientsDetail} />
        </Route>
        <Route path="/addPlaces">
          <AddPlace handler={addPlace} imageHandler={addImage} />
        </Route>
        <Route path="/place/:placeId">
          <PlacesDetail handler={getPlacesDetail} />
        </Route>
      </Switch>
    </div>
  )
}