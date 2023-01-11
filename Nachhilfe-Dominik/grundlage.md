##

Donnerstag um 17:00 Uhr
{/_ <Container>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About />} />
<Route path="/video" element={<Video />} />
<Route path="/foto" element={<Foto />} />
</Routes>
</Container> _/}

      <>
       <div className="navi">
            <div className="link1">
            <NavLink className="link" to="/">
                 Home
                </NavLink>
                <NavLink className="foto" to="/foto">
                Foto
                </NavLink>
                <NavLink className="video" to="/video">
                    Video
                </NavLink>
                <NavLink className="about" to="/about">
                    About
                </NavLink>

            </div>
        </div>
      </>

      import { Container} from "react-bootstrap";
      import { Route, Routes } from "react-router-dom";
