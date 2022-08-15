import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer}>
			&copy; {new Date().getFullYear()} DLTeam
			<small className={Styles.byline}>🚀 感谢CloudFlare提供加速支持</small>
			<small className={Styles.byline}>🚀 感谢Astro提供源码支持</small>
		</footer>
	);
}
export default Footer;
