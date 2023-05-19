const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 4999.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 9999.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 5999.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 6999.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 3999.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 4999.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 4999.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 3999.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 2999.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "amala with eforiro",
    category: "dinner",
    price: 5999.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const bodyContainer = document.querySelector('.section-center')

const btnContainer = document.querySelector('.btn-container')

document.addEventListener('DOMContentLoaded', () => {
  showMenuItems(menu) // Show all menu items by default when the page loads
  showMenuBtns() // Display the filter buttons
})

// Function to display the filter buttons
const showMenuBtns = () => {
  const categories = menu.map((menuItem) => {
    return menuItem.category
  })

  // Create an array of unique categories
  const uniqueCategories = ['all']
  for (category of categories) {

    if (!uniqueCategories.includes(category)) {
      uniqueCategories.push(category)
    }
  }
  
  // Generate the HTML for the filter buttons
  let menuBtnsContainer = uniqueCategories.map((category) => {
    return `<button type="button" class="filter-btn" data-category=${category}>
        ${category}
        </button>`
  })
  menuBtnsContainer = menuBtnsContainer.join('')
  btnContainer.innerHTML = menuBtnsContainer
  
  // Add event listener to each filter button
  const filterBtns = document.querySelectorAll('.filter-btn')

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (ev) => {
      const category = ev.currentTarget.dataset.category
     
      // Filter the menu items based on the selected category
      const menuCategory = menu.filter((menuItem) => {
        
        if (menuItem.category === category) {
          return menuItem
        }
  
      })
      
      // Display all menu items or items of the selected category
      if (category === 'all') {
        showMenuItems(menu)
      }
      else {
        showMenuItems(menuCategory)
      }
    })
    
  })
}

// Function to display the menu items
const showMenuItems = (item) => {

  // Generate the HTML for the menu items
  let showMenu = item.map((menuItem) => {
    
    return `<article class="menu-item">
    <img src=${menuItem.img} class="photo" />
    <div class="item-info">
      <header>
        <h4>${menuItem.title}</h4>
        <h4 class="price">N${menuItem.price}</h4>
      </header>
      <p class="item-text">
        ${menuItem.desc}
      </p>
    </div>
  </article>`
  })
  showMenu = showMenu.join('')
  bodyContainer.innerHTML = showMenu // Display the menu items in the HTML
}

