// Tech stack assets module - consolidates all tech stack icons
import Bootstrap from './Bootstrap.svg';
import CPP from './CPP.svg';
import CSS from './CSS.svg';
import ExpressJSLight from './ExpressJS-Light.svg';
import FlutterLight from './Flutter-Light.svg';
import GithubLight from './Github-Light.svg';
import HTML from './HTML.svg';
import JavaLight from './Java-Light.svg';
import JavaScript from './JavaScript.svg';
import Python from './Python.svg';
import SQLite from './SQLite.svg';
import NodeJSLight from './NodeJS-Light.svg';
import NotionLight from './Notion-Light.svg';
import NpmLight from './Npm-Light.svg';
import Postman from './Postman.svg';
import ReactLight from './React-Light.svg';
import TailwindCSSLight from './TailwindCSS-Light.svg';
import TypeScript from './TypeScript.svg';
import UnityLight from './Unity-Light.svg';
import VercelLight from './Vercel-Light.svg';
import ViteLight from './Vite-Light.svg';

export const techStackIcons = {
  Bootstrap,
  CPP,
  CSS,
  ExpressJSLight,
  FlutterLight,
  GithubLight,
  HTML,
  JavaLight,
  JavaScript,
  Python,
  SQLite,
  NodeJSLight,
  NotionLight,
  NpmLight,
  Postman,
  ReactLight,
  TailwindCSSLight,
  TypeScript,
  UnityLight,
  VercelLight,
  ViteLight,
};

// Export as array for easier iteration if needed
export const techStackArray = Object.entries(techStackIcons).map(([name, icon]) => ({
  name,
  icon,
}));

export default techStackIcons;