import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2 text-theme-text">
      <img 
        src="./src/images/logo.jpg" // Replace this with the correct path to your JPG logo
        alt="Duoinsec Logo" 
        className="h-12 w-12 object-contain"
      />
      <div>
        <span className="text-xl font-bold">Duoinsec</span>
        <span className="text-sm text-theme-text-secondary block">Groups</span>
      </div>
    </Link>
  );
}
