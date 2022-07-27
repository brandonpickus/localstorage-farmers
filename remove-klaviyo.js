//https://farmersdefense.com/collections/shop-all/?bmgm30
//https://farmersdefense.com/collections/shop-all/?b2g1
//https://farmersdefense.com/collections/shop-all/?fs

//Current URL
var url = location.href;
//Write Current URL to localStorage
window.localStorage.setItem("currentURL",url);

const currURL = window.localStorage.getItem('currentURL');
console.log(currURL);
console.log(window.localStorage.getItem("visitor"));

const visited = window.localStorage.getItem("hasVisited");

setTimeout(function(){
//Check if previous visitor
if(window.localStorage.getItem("visitor") === null){
  if(currURL.includes("bmgm30")){
    
    //User has landed on promo page - store as cookie
    window.localStorage.setItem("hasVisited", "true");

    //Keep user as visited for session
    window.localStorage.setItem("currentURL", "https://farmersdefense.com/collections/shop-all/?bmgm30");
    console.log(window.localStorage.getItem("hasVisited"));

    //Push Klaviyo form
    window._klOnsite = window._klOnsite || [];
    window._klOnsite.push(['openForm', 'RS333m']);

    //Store cookie to prevent pop up on future sessions & pages
    window.localStorage.setItem("visitor", "true");
    
  }else if(currURL.includes("b2g1")){
    
    //User has landed on promo page - store as cookie
    window.localStorage.setItem("hasVisited", "true");
    
    //Keep user as visited for session
    window.localStorage.setItem("currentURL", "https://farmersdefense.com/collections/shop-all/?bmgm30");
    console.log(window.localStorage.getItem("hasVisited"));

    //Push Klaviyo form
    window._klOnsite = window._klOnsite || [];
    window._klOnsite.push(['openForm', 'YdFvAh']);

    //Store cookie to prevent pop up on future sessions & pages
    window.localStorage.setItem("visitor", "true");
  }else if(currURL.includes("fs")){
    //User has landed on promo page - store as cookie
    window.localStorage.setItem("hasVisited", "true");
    
    //Keep user as visited for session
    window.localStorage.setItem("currentURL", "https://farmersdefense.com/collections/shop-all/?bmgm30");
    console.log(window.localStorage.getItem("hasVisited"));

    //Push Klaviyo form
    window._klOnsite = window._klOnsite || [];
    window._klOnsite.push(['openForm', 'QT5sSu']);

    //Store cookie to prevent pop up on future sessions & pages
    window.localStorage.setItem("visitor", "true");
  }else{
    console.log(window.localStorage.getItem("hasVisited"));

    //Push OG Form
    window._klOnsite = window._klOnsite || [];
    window._klOnsite.push(['openForm', 'XTKg5b']);

    //Store cookie to prevent pop up on future sessions & pages
    window.localStorage.setItem("visitor", "true");
  }
}
}, 3000);
