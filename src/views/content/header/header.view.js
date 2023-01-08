import classes from './style.module.scss';
import {LogoElement} from "../../components/elements/logo";
import {NavigationHeader} from "../../components/elements/navigation-header";
import {MakeAuth} from "../../components/elements/make-auth";
import {BlockContainer} from "../../components/containers/block";
import {ContentContainer} from "../../components/containers/content";
import {BurgerMenu} from "../../components/elements/burger-menu";
import {useState} from "react";

export const Header = () => {
    const [burgerOpen, setBurgerOpen] = useState(false);
    
    return (
        <>
            <BlockContainer style={{background: 'rgba(70, 166, 231, 0.76)'}}>
                <ContentContainer>
                    <header className={`${classes.header} ${classes.header_desktop}`}>
                        <LogoElement />
                        <NavigationHeader value={burgerOpen} setState={setBurgerOpen} />
                        <MakeAuth />
                    </header>
                    <header className={`${classes.header} ${classes.header_mobile}`}>
                        <LogoElement />
                        <BurgerMenu value={burgerOpen} setState={setBurgerOpen} />
                    </header>
                    <div className={`${classes.mobile_menu} ${burgerOpen ? classes.burger_open : classes.burger_close}`}>
                        <NavigationHeader value={burgerOpen} setState={setBurgerOpen} />
                    </div>
                </ContentContainer>
            </BlockContainer>
        </>
    )
}
