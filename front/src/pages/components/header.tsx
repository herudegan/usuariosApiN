import { Children, useState, ReactNode } from "react";
import styled from "styled-components";
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";

var produtos
export { produtos }
 
const SidebarNav = styled.nav`
  left: ${({  sidebar }) => (sidebar ? "0" : "-100%")};
`;

interface Props {
    children?: ReactNode
}

const Sidebar = ({children, ...props}: Props) => {
  const navigate = useRouter()
  const [sidebar, setSidebar] = useState(true);

  function Deslogar(){
    localStorage.setItem('logado', '0')
    sessionStorage.setItem('logado', '0')
    window.location.reload()
  }

  const showSidebar = (props:any) => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="nav">
          <a className="navIcon" href="#">
            <FaIcons.FaBars onClick={showSidebar}/>
          </a>
          <p className="titleHeader">SEO Sistemas</p>
          <p style={{marginLeft: '75vw', 
          cursor: 'pointer',
          }} onClick={Deslogar} className="titleHeader">Deslogar</p>
        </div>
        <SidebarNav className="sidebarNav" sidebar={sidebar ? undefined : 1}>
          <div className="sidebarWrap">
            <a className="navIcon" href="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </a>
            <a className="sidebarLink" href='/cadastro'>
                <div className="sidebarLabel">
                    <AiIcons.AiOutlineIdcard style={{marginRight: '1vw'}} />
                    Cadastro
                </div>
            </a>
            <a className="sidebarLink" href='/lista'>
                <div className="sidebarLabel">
                    <AiIcons.AiFillBook style={{marginRight: '1vw'}} />
                    Lista
                </div>
            </a>
          </div>
        </SidebarNav>
      </IconContext.Provider>
      {children}
    </>
  );
};

export default Sidebar;
