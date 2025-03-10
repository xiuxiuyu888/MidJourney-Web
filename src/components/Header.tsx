import Logo from '@/components/icons/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import {GITHUB_ORG_URL} from '@/utils/constants';

const Header = () => {
    return (
        <header>
            <div className="fb">
                <Logo />
                <ThemeToggle />
            </div>
            <div className="fi mt-2">
                <span className="gpt-title">MIDJOURNEY</span>
                <span className="gpt-subtitle">Beta1(测试版)</span>
            </div>
            <p className="mt-1 opacity-60 ">
                Powered by
                <a
                    className="b-buy-link ml-1 decoration-wavy underline-offset-8"
                    href="http://www.aahezu.com" target="_blank"
                    rel="noopener noreferrer"
                >
                     AAhezu
                </a>
            </p>
        </header>
    );
};

export { Header};
