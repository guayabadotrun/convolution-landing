import { Analytics } from '@vercel/analytics/react';
import TopNav from './components/TopNav';
import Jumbotron, { JumbotronProps } from './components/Jumbotron';
import ImageWithSidePanels from './components/ImageWithSidePanels/ImageWithSidePanels';
import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline';
import mainImage from './assets/images/main-agent-photo.png';
import promptSample from './assets/images/prompt.gif';
import clientsClick from './assets/images/clients.gif';
import TopGlitchSeparator from './components/TopGlitchSeparator';
import PeopleSlider, { CarouselItem } from './components/PeopleSlider';
import BottomGlitchSeparator from './components/BottomGlitchSeparator';

import sample1 from "./assets/images/sample/people-1.png";
import sample2 from "./assets/images/sample/people-3.png";
import sample3 from "./assets/images/sample/people-2.png";
import sample4 from "./assets/images/sample/people-4.png";
import sample5 from "./assets/images/sample/people-5.png";
import sample6 from "./assets/images/sample/social-media-dashboard.png";
import CustomTabs from './components/CustomTabs';
import { ArrowUp } from 'lucide-react';
import CustomCarousel, { CustomCarouselProps } from './components/CustomCarousel';
import ClaimBlock from './components/ClaimBlock';
import OpenSource from './components/OpenSource';
import Footer from './components/Footer';
import ComingSoonModal from './components/ComingSoonModal';
// import Marquee from './components/Marquee';

const App = () => {
  const jumbotronData: JumbotronProps = {
    title: <>With Convolution, you’re not just creating avatars—you’re launching <b>ICONs</b> that shape conversations, build communities, and redefine digital presence in the Robinhood Chain-powered universe.</>,
    ctas: [
      {
        text: "Create",
        link: "https://app.convolution.agency",
        variant: "dark",
      },
      {
        text: "How to",
        link: "https://convolution.gitbook.io/doc",
        variant: "light",
      }
    ],
  };
  const agentsCarouselTitle = 'Elevate your influence with ICONs';
  const agentsCarouselSubtitle = <>Our platform empowers you to design and deploy <b>ICONs</b> tailored to your brand’s unique needs in a few seconds.</>;
  const agentsCarouselData: CarouselItem[] = [
    {
      image: sample1,
      title: "Sarah Johnson",
      subtitle: "Lifestyle & Travel",
      socialLinks: {
        /*
        instagram: "#",
        twitter: "#",
        facebook: "#"
        */
      }
    },
    {
      image: sample2,
      title: "Eva Croft",
      subtitle: "Fitness & Health",
      socialLinks: {
        /*
        instagram: "#",
        twitter: "#"
        */
      }
    },
    {
      image: sample3,
      title: "Emma Davis",
      subtitle: "Fashion & Beauty",
      socialLinks: {
        /*
        instagram: "#",
        facebook: "#"
        */
      }
    },
    {
      image: sample4,
      title: "Daisy Williams",
      subtitle: "e-Learning",
      socialLinks: {
        /*
        instagram: "#",
        facebook: "#"
        */
      }
    },
    // Añade más items según necesites
  ];
  const tabs = [
    {
      title: 'Anime',
      subtitle: "Fun, vibrant, and expressive. Perfect for engaging Web3 audiences and creating a playful brand identity.",
      icon: <ArrowUp size={20} />, 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      image: sample5,
      slides: [
        {
          title: 'Unique Branding',
          description: 'Every ICON carries a distinctive visual identity. We use advanced modeling techniques to ensure that every avatar clearly represents the Convolution brand, recognizable across the digital space.'
        },
        {
          title: 'LDM powered',
          description: 'Using advanced modeling techniques, we ensure each avatar not only embodies your brand’s identity but also clearly reflects the signature Convolution style, creating instant trust and recognition in any digital environment.'
        }
      ]
    },
    {
      title: 'Realistic',
      subtitle: "Detailed, lifelike, and immersive. Perfect for building credibility, trust, and delivering a sophisticated sense of realism.",
      icon: <ArrowUp size={20} />, 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      image: sample2,
      slides: [
        {
          title: 'Realistic Switch',
          description: 'Every ICON is meticulously crafted to achieve stunning realism and authenticity.'
        },
        {
          title: 'LDM powered',
          description: 'Using advanced modeling techniques, we ensure each avatar not only embodies your brand’s identity but also clearly reflects the signature Convolution style, creating instant trust and recognition in any digital environment.'
        },
      ]
    },
  ];
  const videoWithCarousel: CustomCarouselProps = {
    data: {
      image: sample6,
      slides: [
        {
          title: "Your Creativity Pays Off",
          description: "Agents that captivate audiences and boost engagement across social media earn daily rewards.",
          ctas: [
            {
              text: "Launch app",
              link: "https://app.convolution.agency",
              variant: "dark",
            },
          ],
        },
        {
          title: 'Earn from Engagement',
          description: 'Top-performing agents receive rewards sourced from liquidity pool fees and daily token unlocks.',
          ctas: [
            {
              text: "Create",
              link: "https://app.convolution.agency",
              variant: "dark",
            },
            {
              text: "How to",
              link: "https://convolution.gitbook.io/doc",
              variant: "light",
            }
          ],
        },
        {
          title: 'Rewarding Your Impact',
          description: 'Turn your digital influence into tangible gains, innovate, engage, and get rewarded daily!',
          ctas: [
            {
              text: "Launch App",
              link: "https://app.convolution.agency",
              variant: "dark",
            },
          ],
        }
      ]
    }
  };

  //const marqueeText = "TOKEN ($CON): Eda9RsTjhEjP4Uxjhp1gW2c9cJqokNMbQoUUdzFcpump";
  //const copyableText = "Eda9RsTjhEjP4Uxjhp1gW2c9cJqokNMbQoUUdzFcpump";

  return (
    <>
      <TopNav></TopNav>
      
      <Jumbotron title={jumbotronData.title} ctas={jumbotronData.ctas}></Jumbotron>

      <ImageWithSidePanels
        mainMedia={mainImage}
        mainMediaAlt="Kai agent portrait"
        leftPanel={{
          icon: <ArrowTrendingUpIcon className="w-5 h-5" />,
          title: "Be Social",
          //media: clientsClick,
          media: clientsClick,
          //mediaType: "video",
          mediaType: "image",
          mediaAlt: "",
          text: "Interact with your community instantly. Telegram, X, and Discord are now available!"
        }}
        rightPanel={{
          icon: <ArrowTrendingUpIcon className="w-5 h-5" />,
          title: "Be Creative",
          media: promptSample,
          mediaType: "image",
          mediaAlt: "",
          text: "Launch your ICON in seconds with powerful AI assistance and customize every detail to match your brand."
        }}
      />

      <TopGlitchSeparator/>

      <PeopleSlider title={agentsCarouselTitle} subtitle={agentsCarouselSubtitle} items={agentsCarouselData} />

      <BottomGlitchSeparator/>

      <CustomTabs
        title="Choose Your Style: Anime or Realistic"
        subtitle={<>Transform your digital presence with <b>ICONs</b> that align with your brand identity. Customize your <b>ICON’s</b> appearance to match your audience, choosing between two distinct visual styles.</>}
        tabs={tabs}
      />

      <ClaimBlock></ClaimBlock>

      <CustomCarousel data={videoWithCarousel.data}/>

      <OpenSource></OpenSource>

      <Footer></Footer>

      <ComingSoonModal />

      <Analytics />
    </>
  );
}

export default App;