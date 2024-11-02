import fish from "./assets/fishfillet.jpg";
import chicken from "./assets/chicken.jpg";
import potato from "./assets/potato.jpg";
import seafood from "./assets/seafood.jpg";
import morgan from "./assets/morgan.jpeg";
import kendall from "./assets/kendall.jpeg";
export const home = `
 <div class="container">
      <main>
        <div class="menusection">
          <div class="header">
            <p class="menu">Menus</p>
            <h2>Discover Our Menus</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              repudiandae non tempora expedita quibusdam.
            </p>
          </div>

          <div class="menulist">
            <div class="menuitem">
              <div class="image">
                <img src="${fish}" alt="" />
              </div>
              <div class="desc">
                <div class="title">
                  <h2>Fish Fillet</h2>
                  <p class="price">$30</p>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  repudiandae non tempora expedita quibusdam.
                </p>
              </div>
            </div>

            <div class="menuitem">
              <div class="image">
                <img src="${chicken}" alt="" />
              </div>
              <div class="desc">
                <div class="title">
                  <h2>Slated Chicken</h2>
                  <p class="price">$30</p>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  repudiandae non tempora expedita quibusdam.
                </p>
              </div>
            </div>

            <div class="menuitem">
              <div class="image">
                <img
                  src="${potato}"
                  alt=""
                />
              </div>
              <div class="desc">
                <div class="title">
                  <h2>Baked Potato</h2>
                  <p class="price">$30</p>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  repudiandae non tempora expedita quibusdam.
                </p>
              </div>
            </div>

            <div class="menuitem">
              <div class="image">
                <img
                  src="${seafood}"
                  alt=""
                />
              </div>
              <div class="desc">
                <div class="title">
                  <h2>Seafood Pasta</h2>
                  <p class="price">$30</p>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  repudiandae non tempora expedita quibusdam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section>
        <div class="testimonials">
          <div class="testheader">
            <p>TESTIMONIALS</p>
            <h2>What People Says</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              incidunt excepturi!
            </p>
          </div>
          <div class="test_wrapper">
            <div class="testimony">
              <p class="qoute">"</p>
              <strong>Love the menus</strong>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                cumque nulla impedit, corporis soluta in eum sed.
              </p>
              <div class="profile">
                <div class="image">
                  <img src="${morgan}" alt="profile" />
                </div>
                <div class="desc">
                  <span>Morgan Williams</span>
                  <p>Message of fulfil</p>
                </div>
              </div>
            </div>
            <div class="testimony">
              <p class="qoute">"</p>
              <strong>Love the menus</strong>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                cumque nulla impedit, corporis soluta in eum sed.
              </p>
              <div class="profile">
                <div class="image">
                  <img src="${kendall}" alt="profile" />
                </div>
                <div class="desc">
                  <span>Kendal James</span>
                  <p>Message of fulfil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
`;
