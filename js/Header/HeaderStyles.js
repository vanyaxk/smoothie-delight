import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 768px;
    margin: 0 auto;
`;

export const LinkList = styled.ul`
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`;

export const LinkLi = styled.li`
    padding: 10px 20px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all .3s;
    &:hover {
        border: 1px solid #696969;
    }
`;

export const NavigLink = styled(Link)`
    padding: 10px;
    text-decoration: none;
    color: #696969;
    text-transform: uppercase;
`;