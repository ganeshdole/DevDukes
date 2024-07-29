import React from 'react';
import logo from "../../public/logo.png";

const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="text-base text-gray-400 hover:text-white transition duration-150 ease-in-out">
      {children}
    </a>
  </li>
);

const FooterSection = ({ title, links }) => (
  <div>
    <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <FooterLink key={index} href={link.href}>
          {link.text}
        </FooterLink>
      ))}
    </ul>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="xl:grid xl:grid-cols-4 xl:gap-8">
        <div className="space-y-8 xl:col-span-1">
          <img 
            className="h-10 w-auto bg-white p-2 rounded" 
            src={logo} 
            alt="Company logo" 
          />
          <p className="text-gray-400 text-sm leading-6">
            Making the world a better place through constructing elegant hierarchies.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-3">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <FooterSection
              title="Solutions"
              links={[
                { href: "#", text: "Marketing" },
                { href: "#", text: "Analytics" },
                { href: "#", text: "Commerce" },
                { href: "#", text: "Insights" },
              ]}
            />
            <div className="mt-12 md:mt-0">
              <FooterSection
                title="Support"
                links={[
                  { href: "#", text: "Pricing" },
                  { href: "#", text: "Documentation" },
                  { href: "#", text: "Guides" },
                  { href: "#", text: "API Status" },
                ]}
              />
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <FooterSection
              title="Company"
              links={[
                { href: "#", text: "About" },
                { href: "#", text: "Blog" },
                { href: "#", text: "Jobs" },
                { href: "#", text: "Press" },
              ]}
            />
            <div className="mt-12 md:mt-0">
              <FooterSection
                title="Legal"
                links={[
                  { href: "#", text: "Privacy" },
                  { href: "#", text: "Terms" },
                  { href: "#", text: "Cookie Policy" },
                  { href: "#", text: "Contact" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-8">
        <p className="text-base text-gray-400 xl:text-center">
          &copy; {new Date().getFullYear()} Bigspring, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;