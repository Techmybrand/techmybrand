import homeWhite1 from "/images/home-white-card-1.webp";
import homeWhite2 from "/images/home-white-card-2.webp";
import homeWhite3 from "/images/home-white-card-3.webp";
import homeBlue1 from "/images/home-blue-card-1.webp";
import homeBlue2 from "/images/home-blue-card-2.webp";
import homeBlue3 from "/images/home-blue-card-3.webp";
import courage from "/images/courage.webp";
import confidence from "/images/confidence.webp";
import fortune from "/images/fortune.webp";
import analawgy from "/images/clients/analawgy.png";
import cbn from "/images/clients/cbn.png";
import may99 from "/images/clients/may99.png";
import pcn from "/images/clients/pcn.png";
import primex from "/images/clients/primex.png";
import spe from "/images/clients/spe.png";
import about1 from "/images/icons/about1.webp";
import about2 from "/images/icons/about2.webp";
import about3 from "/images/icons/about3.webp";
import blog1 from "/images/blog-01-330x330.webp";
import image from "/images/mitech-home-infotechno-box-large-image-02-330x330.webp";
import image3 from "/images/mitech-home-infotechno-box-large-image-03-330x330.webp";
import sol1 from "/images/solutions/sol1.webp";
import sol2 from "/images/solutions/sol2.webp";
import sol3 from "/images/solutions/sol3.webp";
import sol4 from "/images/solutions/sol4.webp";
import sol5 from "/images/solutions/sol5.webp";
import sol6 from "/images/solutions/sol6.webp";
import bus1 from "/images/business/bus1.webp";
import bus2 from "/images/business/bus2.webp";
import bus3 from "/images/business/bus3.webp";
import bus4 from "/images/business/bus4.webp";
import bus5 from "/images/business/bus5.webp";
import bus6 from "/images/business/bus6.webp";

export const navs = [
	{
		id: 1,
		page: "IT Solutions",
		text: "IT Solutions",
		links: [
			{ label: "IT Services", url: "/it-services", id: 100 },
			{ label: "Business Solution", url: "/business", id: 103 },
		],
	},
	{
		id: 2,
		page: "Support",
		text: "Support",
		links: [{ label: "Contact Us", url: "/contact", id: 106 }],
	},
	{
		id: 3,
		page: "Company",
		text: "Company",
		links: [
			{ label: "About Us", url: "/about", id: 105 },

			{ label: "Why choose Us", url: "/choose-us", id: 107 },
		],
	},
];

export const homeCard = [
	{
		header: "IT Design",
		body: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
		footer: "TechMyBrand",
		image: "/images/home-blue-card-1.webp",
		hoverImage: "/images/home-white-card-1.webp",
	},
	{
		header: "IT Management",
		body: "It’s possible to simultaneously manage and transform information from one server to another.",
		footer: "TechMyBrand",
		image: "/images/home-blue-card-2.webp",
		hoverImage: "/images/home-white-card-2.webp",
	},
	{
		header: "Data Security",
		body: "Back up your database, store in a safe and secure place while still maintaining its accessibility.",
		footer: "TechMyBrand",
		image: "/images/home-blue-card-3.webp",
		hoverImage: "/images/home-white-card-3.webp",
	},
];

export const industries = [
	{
		title: "IT Design",
		body: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
		footer: "TechMyBrand",
	},
	{
		title: "IT Management",
		body: "It’s possible to simultaneously manage and transform information from one server to another",
		footer: "TechMyBrand",
	},
	{
		title: "Data Security",
		body: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
		footer: "TechMyBrand",
	},
	{
		title: "Business Reform",
		body: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
		footer: "TechMyBrand",
	},
	{
		title: "Infrastructure Plan",
		body: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
		footer: "TechMyBrand",
	},
	{
		title: "Firewall Advance",
		body: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
		footer: "TechMyBrand",
	},
	{
		title: "Desktop Computing",
		body: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
		footer: "TechMyBrand",
	},
	{
		title: "Software Engineering",
		body: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
		footer: "TechMyBrand",
	},
];

export const testimonials = [
	{
		image: "/images/courage.webp",
		name: "Courage",
		company: "New Jerusalem Pictures",
		testimony:
			"I've worked with a lot of IT companies on a lot of projects, TechMyBrand is one of the most impressive to me.",
	},
	{
		image: "/images/confidence.webp",
		name: "Confidence",
		company: "Primex",
		testimony:
			"Techmybrand delievered a large project in a very short period. They also provided free post-deployment support.",
	},
	{
		image: "/images/fortune.webp",
		name: "Fortune",
		company: "Analawgy Magazine",
		testimony:
			"Techmybrand took our barely formed idea and turned it into an amazing product. The entire process was smooth and fast.",
	},
];

export const ITLongCard = [
	{
		icon: "fal fa-life-ring",
		title: "Quality Assurance System",
		content:
			"Our service offerings enhance customer experience throughout secure & highly functional end-to-end warranty management",
	},
	{
		icon: "fal fa-lock-alt",
		title: "Accurate Testing Processes",
		content:
			"Develop and propose product improvements through periodical and accurate testing, repairing & refining every version.",
	},
	{
		icon: "fal fa-globe",
		title: "Smart API Generation",
		content:
			"Develop and propose product improvements through periodical and accurate testing, repairing & refining every version.",
	},
	{
		icon: "fal fa-medal",
		title: "Infrastructure Integration Technology",
		content:
			"At TechMyBrand, we have a holistic and integrated approach towards core modernization to experience technological evolution.",
	},
];

export const clients = [
	{
		name: "primex",
		image: "/images/clients/primex.png",
	},
	{
		name: "analawgy",
		image: "/images/clients/analawgy.png",
	},
	{
		name: "cbn",
		image: "/images/clients/cbn.png",
	},
	{
		name: "may99",
		image: "/images/clients/may99.png",
	},
	{
		name: "spe",
		image: "/images/clients/spe.png",
		size: "spe-width",
	},
	{
		name: "pcn",
		image: "/images/clients/pcn.png",
		size: "pcn-width",
	},
];

export const socials = [
	{
		url: "https://twitter.com/",
		label: "Twitter",
		style: "fa-twitter",
	},
	{
		url: "https://facebook.com/",
		label: "Facebook",
		style: "fa-facebook",
	},
	{
		url: "https://instagram.com/",
		label: "Instagram",
		style: "fa-instagram",
	},
	{
		url: "https://linkedin.com/",
		label: "Linkedin",
		style: "fa-linkedin",
	},
];

export const aboutCards = [
	{
		image: "/images/icons/about1.webp",
		heading: "What we can do?",
		body: "We put a strong focus on the needs of your business to figure out solutions that best fits your demand and nail it.",
		footer: "TechMyBrand",
	},
	{
		image: "/images/icons/about2.webp",
		heading: "Become out partners?",
		body: "Our preventive and progressive approach will help you take the lead while addressing possible threats in managing data.",
		footer: "TechMyBrand",
	},
	{
		image: "/images/icons/about3.webp",
		heading: "Need a hand?",
		body: "Our support team is available 24/7 a day, 7 days a week and can get ready for solving any of your situational rising problems.",
		footer: "TechMyBrand",
	},
];

export const solutions = [
	{
		image: "/images/solutions/sol1.webp",
		title: "Warranty Management IT",
		body: "Our service offerings enhance customer experience throughout secure &amp; highly functional end-to-end warranty management.",
	},
	{
		image: "/images/solutions/sol2.webp",
		title: "Quality Control System",
		body: "It's more than a responsibility but a guarantee from us to gain customer trust with highly reliable quality control system.",
	},
	{
		image: "/images/solutions/sol5.webp",
		title: "Highly Professional Staffs",
		body: "Having obtained the official & formal training in IT technology and technical fields, our staffs know more than what they show.",
	},
	{
		image: "/images/solutions/sol4.webp",
		title: "Product Engineering & Services",
		body: "Develop and propose product improvements through periodical and accurate testing, repairing & refining every version.",
	},
	{
		image: "/images/solutions/sol3.webp",
		title: "Infrastructure Integration Technology",
		body: "At TechMyBrand, we have a holistic and integrated approach towards core modernization to experience technological evolution.",
	},
	{
		image: "/images/solutions/sol6.webp",
		title: "Information Security Management",
		body: "Information security has been a rising issue lately due to a series of scandals from big companies, rest assured, we're here.",
	},
];

export const chooseUs = [
	{
		image: "/images/blog-01-330x330.webp",
		title: "Consistency",
		url: "/about",
		text: "Consistent high-quality results with robust agile teams and dedicated QA practices.",
	},
	{
		image: "/images/mitech-home-infotechno-box-large-image-02-330x330.webp",
		title: "Efficient Database Security",
		url: "/about",
		text: "Consistent high-quality results with robust agile teams and dedicated QA practices. Also, with Transparent project management with maximum adherence to deadlines.",
	},
	{
		image: "/images/mitech-home-infotechno-box-large-image-03-330x330.webp",
		title: "Best Practices",
		url: "/about",
		text: "Our technical experts have a flair for developing clean-coded websites based on customers’ needs, global guidelines and trends.",
	},
];

export const businessSolutions = [
	{
		icon: "/images/business/bus1.webp",
		title: "IT Design",
		content:
			"We provide the most responsive and functional IT design for companies and businesses worldwide.",
	},
	{
		icon: "/images/business/bus2.webp",
		title: "IT Management",
		content:
			"It’s possible to simultaneously manage and transform key information from one server to another. ",
	},
	{
		icon: "/images/business/bus3.webp",
		title: "Data Security",
		content:
			"Back up your database, store in a safe and secure place while still maintaining its accessibility.",
	},
	{
		icon: "/images/business/bus4.webp",
		title: "Business Reform",
		content:
			"We propose feasible &amp; practical plans for successfully transform businesses based on their needs.",
	},
	{
		icon: "/images/business/bus5.webp",
		title: "Infrastructure Plan",
		content:
			"TechMyBrand takes into account all conditions and budgets needed for building infrastructure plan.",
	},
	{
		icon: "/images/business/bus6.webp",
		title: "FireWall Advancement",
		content:
			"Enhancing the strength and security of firewalls to protect online data from malicious sources. ",
	},
];
