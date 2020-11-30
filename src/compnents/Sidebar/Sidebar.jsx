import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateValue } from '../../state/StateProvider';


const Sidebar = () => {
    const [{ playlists }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Home" Icon={SearchIcon} />
            <SidebarOption title="Home" Icon={LibraryMusicIcon} />

            <br />
            <strong className="sidebar__title">PLAYLIST</strong>
            <hr />
            {
                playlists?.items?.map(playlist => (
                    <SidebarOption title={playlist.name} />
                ))
            }
        </div>
    )
}

export default Sidebar
