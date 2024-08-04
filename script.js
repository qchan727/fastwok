"use strict";

const tablesContainerEl = document.querySelector(".tables-container");
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

(async () => {
   const result = await fetch("items.json");
   const json = await result.json();
   let html = "";

   json.forEach((section) => {
      html += `<section class="section-food" id="section-${section.sectionHeading.toLowerCase()}"> 
      <div class="table">
         <h2 class="secondary-heading">${section.sectionHeading}</h2>`;
      switch (section.sectionHeading) {
         case "Soup":
            html += `<p>All served with <span class="red"><strong>Dry Noodles.</strong></span><p>`;
            break;
         case "Chow Mein or Chop Suey":
            html += `<p>All served with <span class="red"><strong>White Rice</strong></span> and <span class="red"><strong>Dry Noodles.</strong></span><p>`;
            break;
         case "Egg Foo Young":
            html += `<p>All served with <span class="red"><strong>White Rice</strong></span> and gravy.<p>`;
            break;
         case "Chicken":
            html += `<div><p>All served with White Meat Chicken!</p><p>All served with <span class="red"><strong>White Rice.</strong></span></p></div>`;
            break;
         case "Pork":
         case "Beef":
         case "Vegetable":
            html += `<p>All served with <span class="red"><strong>White Rice.</strong></span><p>`;
            break;
         case "Seafood":
            html += `<div><p>All served with <span class="red"><strong>White Rice.</strong></span></p><p>Additional <strong>$1.50</strong> charge for <span class="red"><strong>Scallops.</strong></span></p></div>`;
            break;
         case "Diet Specials":
            html += `<div><p>All steamed food!</p><p>All served with <span class="red"><strong>White Rice</strong></span> and sauce on the side.</p></div>`;
            break;
         case "Lunch Specials":
            html += `<div>
                        <p>Tuesday - Saturday from 11:00 am to 3:30 pm <strong>ONLY</strong>!</p>
                        <p>Served with <span class="red"><strong>Fried Rice</strong></span> or <span class="red"><strong>White Rice</strong></span> & <span class="red"><strong>Egg Roll</strong></span> or <span class="red"><strong>Soda</strong></span> or <span class="red"><strong>Water.</strong></span>
                        </div>`;
            break;
      }
      html += `<div class="container-food">
                  <table>`;
      if (section.multiplePrices) {
         html += `<tr>
                     <th class="col-long">Name</th>
                     <th class="price-right">Price<br>(Small)</th>
                     <th class="price-right">Price<br>(Large)</th>
                  </tr>`;
         section.items.forEach((item) => {
            html += item.spicy ? `<tr class="red">` : `<tr>`;
            html += `<td class="col-long">${item.name}`;
            if (item.description) {
               html += `<br> <span class="food-desc"> ${item.description}</span>`;
            }
            html += `</td>
                              <td class="price-right">${item.priceSmall}</td>
                              <td class="price-right">$${item.priceLarge}</td>
                           </tr>
                           `;
         });
      } else {
         html += `<tr>
                     <th class="col-long">Name</th>
                     <th></th>
                     <th class="price-right">Price</th>
                  </tr>
                  `;
         section.items.forEach((item) => {
            html += item.spicy ? `<tr class="red">` : `<tr>`;
            html += `<td class="col-long">${item.name}`;
            if (item.description) {
               html += `<br> <span class="food-desc"> ${item.description}</span>`;
            }
            html += `</td>
                     <td></td>
                     <td class="price-right">$${item.price}</td>
                  </tr>
                  `;
         });
      }
      html += `
            </table>
         </div>
         <div class="food-links">
         <a href="#section-appetizers">Appetizers</a> &bull;
         <a href="#section-soup">Soup</a> &bull;
         <a href="#section-chow mein or chop suey">Chow Mein/ Chop Suey</a> &bull;
         <a href="#section-fried rice">Fried Rice</a> &bull;
         <a href="#section-egg foo young">Egg Foo Young</a> &bull;
         <a href="#section-lo mein">Lo Mein</a> &bull;
         <a href="#section-noodle soup">Noodle Soup</a> &bull;
         <a href="#section-chicken">Chicken</a> &bull;
         <a href="#section-pork">Pork</a> &bull;
         <a href="#section-beef">Beef</a> &bull;
         <a href="#section-seafood">Seafood</a> &bull;
         <a href="#section-vegetable">Vegetable</a> &bull;
         <a href="#section-chef's specials">Chef's Specials</a> &bull;
         <a href="#section-thai specials">Thai Specials</a> &bull;
         <a href="#section-lunch specials">Lunch Specials</a> &bull;
         <a href="#section-diet specials">Diet Specials</a>
      </div>
      </section>`;
   });
   tablesContainerEl.innerHTML += html;
})();

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
   link.addEventListener("click", function (e) {
      const href = link.getAttribute("href");
      // Scroll back to top
      if (href === "#") {
         e.preventDefault();
         window.scrollTo({
            top: 0,
            behavior: "smooth",
         });
      }
      // Close mobile navigation
      if (link.classList.contains("main-nav-link")) {
         headerEl.classList.toggle("nav-open");
      }
   });
});

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("header");

btnNavEl.addEventListener("click", function () {
   headerEl.classList.toggle("nav-open");
});
