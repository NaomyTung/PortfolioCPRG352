import myimage from './photome.png';

function Header() {
    return (
        <header class="text-white bg-dark">
          <div class="container py-5">
              <div class="row">
                  <div class="col-xs-3 col-lg-2 text-center">
                      <img src={myimage}
                          alt="Person - Avatar Placeholder@seekpng.com" 
                          class="border border-5 rounded-circle img-fluid" 
                          style={{width: '150px', height: '150px'}}
                          />
                  </div>
                  <div class="col text-center text-lg-start">
                      <h1>Naomy Marumo Tung</h1>

                      <p class="lead">Software development student at SAIT (Southern Alberta Institute of Technology).</p>

                      <ul class="list-inline">
                          <li class="list-inline-item my-2"><a href="#" class="fs-5 link-light text-decoration-none"><i
                                      class="bi bi-envelope pe-1"></i>
                                  <span class="text-center">E-mail</span></a></li>
                          <li class="list-inline-item my-2"><a href="https://www.linkedin.com/in/naomytung/" class="fs-5 link-light text-decoration-none"><i
                                      class="bi bi-linkedin pe-1"></i>
                                  LinkedIn</a></li>
                          <li class="list-inline-item my-2"><a href="https://github.com/NaomyTung" class="fs-5 link-light text-decoration-none"><i
                                      class="bi bi-github pe-1"></i>
                                  GitHub</a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </header>
    );
}

export default Header;