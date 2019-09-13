import './css/index.scss';
import {header} from './layout/header';
import {account} from './pages/account/account';
import {footer} from './layout/footer';

header.init();

// use click event
//if(window.location.href === "http://localhost:8080/#C4") {
   account.init();
//}

footer.init();