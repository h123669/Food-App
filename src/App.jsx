import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import Layout from './components/Layout/Layout'
import Categories from './components/Categories/Categories'
import Area from './components/Area/Area'
import Ingredients from './components/Ingredients/Ingredients'
import Contact from './components/Contact/Contact'
import Recipes from './components/Recipes/Recipes'
import Home from './components/Home/Home'
import RecipesDetails from './components/RecipesDetails/RecipesDetails'
import CategoryDetails from './components/CategoryDetails/CategoryDetails'
import AreaDetails from './components/AreaDetails/AreaDetails'
import IngredientsDetails from './components/IngredientsDetails/IngredientsDetails';
import { RecoilRoot } from 'recoil'
import Search from './components/Search/Search';
import SearchMeal from './components/SearchMeal/SearchMeal'

function App() {
  const [count, setCount] = useState(0)
  
  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#9911ff",
    borderRadius: 5,
}

let x=createBrowserRouter([
  {path:"",element:<Layout/>,children:[
    {path:"area", element:<Area/>},
    {path:"catergories", element:<Categories/>},
    {index:true, element:<Home/>},
    {path:"ingredients", element:<Ingredients/>},
    {path:"Contact Us", element:<Contact/>},
    {path:"Recipes", element:<Recipes/>},
    {path:"search", element:<SearchMeal/>},
    {path:"RecipesDetails/:id", element:<RecipesDetails/>},
    {path:"CategoryDetails/:category", element:<CategoryDetails/>},
    {path:"AreaDetails/:area", element:<AreaDetails/>},
    {path:"IngredientsDetails/:Ingredients", element:<IngredientsDetails/>},

  ]}
]

)
  return (
    <>
    <RecoilRoot>
    <RouterProvider router={x}>
    
    </RouterProvider>

    </RecoilRoot>
    </>
  )
}

export default App
