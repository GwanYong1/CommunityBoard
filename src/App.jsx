import './App.css';
import RestaurantCard from './components/RestaurantCard'

const App = () => {
  const restaurants = [
    { id: 1, name: 'In-N-Out', description: 'In-N-Out Burger is an American regional chain of fast food restaurants with locations primarily in California and to a lesser extent the Southwest from Oregon to Texas. It was founded in Baldwin Park, California, in 1948 by Harry and Esther Snyder.', imageURL: '/images/In_N_Out_image.jpg', menu_link: 'https://www.in-n-out.com/menu' },
    { id: 2, name: 'Chipotle', description: 'Chipotle Mexican Grill, Inc., often known simply as Chipotle, is an American chain of fast casual restaurants specializing in bowls, tacos, and Mission burritos made to order in front of the customer.', imageURL: '/images/Chipotle_image.jpg', menu_link: 'https://www.chipotle.com/#menu' },
    { id: 3, name: 'Cheesecake Factory', description: 'The Cheesecake Factory Incorporated is an American restaurant company and distributor of cheesecakes based in the United States.', imageURL: '/images/Cheesecake_Factory_image.jpg', menu_link: 'https://www.thecheesecakefactory.com/menu' },
    { id: 3, name: 'Yard House', description: 'At Yard House, enjoy classic American fare with more than 100 dishes made from scratch, including pizzas, burgers, salads and more.', imageURL: '/images/Yard_House_image.jpg', menu_link: 'https://www.yardhouse.com/menu/starters/apps' },
    { id: 3, name: 'Din Tai Fung', description: 'Modern outpost of a Taiwan chain famed for its Shanghai-style soup dumplings & noodles.', imageURL: '/images/Din_Tai_Fung_image.jpg', menu_link: 'https://dintaifungusa.com/us/menu.html' },
    { id: 3, name: 'California Pizza Kitchen', description: 'California Pizza Kitchen is an American casual dining restaurant chain that specializes in California-style pizza.', imageURL: '/images/Cal_Pizza_Kitchen_image.jpg', menu_link: 'https://www.cpk.com/menu' },
    { id: 3, name: 'BCD Tofu House', description: 'BCD Tofu is The Original Soon Tofu Restaurant', imageURL: '/images/BCD_image.jpg', menu_link: 'https://www.bcdtofuhouse.com/view-the-menu' },
    { id: 3, name: 'Buffalo Wild Wings', description: 'Buffalo Wild Wings is an American casual dining restaurant and sports bar franchise in the United States, Canada, India, Mexico, Panama, Philippines, Saudi Arabia, Bahrain, and United Arab Emirates which specializes in Buffalo wings and sauces.', imageURL: '/images/BWW_image.jpg', menu_link: 'https://www.buffalowildwings.com/menu/' },
    { id: 3, name: 'Chick-fil-A', description: 'Chick-fil-A, Inc. is an American fast food restaurant chain and the largest chain specializing in chicken sandwiches.', imageURL: '/images/Chick_fil_A_image.jpg', menu_link: 'https://www.chick-fil-a.com/menu' },
    { id: 3, name: 'Boiling Point', description: 'Boiling Point specializes in Taiwanese hot soup cuisine', imageURL: '/images/Boiling_Point_image.jpg', menu_link: 'https://www.bpgroupusa.com/Food_SC.html' }
  ]

  return (
    <div className="App">
      <div className="app-header">
        <img src= '/images/header_image.jpg' className="header-img" />
      </div>
      <h1 style={{ textAlign: 'center' }}>Popular Restaurants</h1>
      <div className="popular-restaurant-container">
        {restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  )
}

export default App