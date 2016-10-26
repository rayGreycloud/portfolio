import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".skill-item"), "85%");
new RevealOnScroll($(".project"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
