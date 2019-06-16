import React, {Component} from 'react';
import {
    Nav,
    LinkList,
    LinkLi,
    NavigLink
} from './HeaderStyles';

class Header extends Component {
    navItems = [
        {name: 'Start', link: '/', },
        {name: 'Why a smoothie?', link: 'scrollToMain',},
        {name: 'About Us', link: 'scrollToAbout'},
        {name: 'Contact', link: 'scrollToContact'}
    ];

    render() {
        return (
            <Nav>
            <LinkList>
                {this.navItems.map(item => {
                    return <LinkLi key={item.name}><NavigLink   key={item.name}
                                                                activeClass="active"
                                                                to={item.link}
                                                                spy={true}
                                                                smooth={true}
                                                                offset={0}
                                                                duration= {500}
                    >{item.name}</NavigLink></LinkLi>
                })}
            </LinkList>
        </Nav>
        )
    }
}

export default Header;
