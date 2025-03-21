import TopNav from './components/TopNav';
import Jumbotron, { JumbotronProps } from './components/Jumbotron';
import ImageWithSidePanels from './components/ImageWithSidePanels/ImageWithSidePanels';
import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline';
import mainImage from './assets/images/main-agent-photo.png';
import promptSample from './assets/images/autogenerate-prompt.mp4';
import clientsClick from './assets/images/clients-click.mp4';
import TopGlitchSeparator from './components/TopGlitchSeparator';
import PeopleSlider, { CarouselItem } from './components/PeopleSlider';
import BottomGlitchSeparator from './components/BottomGlitchSeparator';

import sample1 from "./assets/images/sample/people-1.png";
import sample2 from "./assets/images/sample/people-3.png";
import sample3 from "./assets/images/sample/people-2.png";
import sample4 from "./assets/images/sample/people-4.png";
import sample5 from "./assets/images/sample/people-5.png";
import CustomTabs from './components/CustomTabs';
import { ArrowUp } from 'lucide-react';
import CustomCarousel, { CustomCarouselProps } from './components/CustomCarousel';
import ClaimBlock from './components/ClaimBlock';
import OpenSource from './components/OpenSource';
import Footer from './components/Footer';

const App = () => {
  const jumbotronData: JumbotronProps = {
    title: <>With Convolution, you’re not just creating avatars—you’re launching <b>ICONs</b> that shape conversations, build communities, and redefine digital presence in the Solana-powered universe.</>,
    ctas: [
      {
        text: "Create",
        link: "#",
        variant: "dark",
      },
      {
        text: "How to",
        link: "#",
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
        instagram: "#",
        twitter: "#",
        facebook: "#"
      }
    },
    {
      image: sample2,
      title: "Mike Thompson",
      subtitle: "Fitness & Health",
      socialLinks: {
        instagram: "#",
        twitter: "#"
      }
    },
    {
      image: sample3,
      title: "Emma Davis",
      subtitle: "Fashion & Beauty",
      socialLinks: {
        instagram: "#",
        facebook: "#"
      }
    },
    {
      image: sample4,
      title: "Emma Davis",
      subtitle: "Fashion & Beauty",
      socialLinks: {
        instagram: "#",
        facebook: "#"
      }
    },
    // Añade más items según necesites
  ];
  const tabs = [
    {
      title: 'Cartoon',
      subtitle: "Fun, vibrant, and expressive. Perfect for engaging younger audiences and creating a playful brand identity.",
      icon: <ArrowUp size={20} />, 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      image: sample5,
      slides: [
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis mauris. Nulla sagittis.'
        },
        {
          title: 'Title',
          description: 'Description'
        }
      ]
    },
    {
      title: 'Hyper-realism',
      subtitle: "Detailed, lifelike, and immersive. Ideal for building trust and creating a strong sense of realism.",
      icon: <ArrowUp size={20} />, 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      image: sample2,
      slides: [
        {
          title: 'Title',
          description: 'Description'
        },
        {
          title: 'Title',
          description: 'Description'
        }
      ]
    },
  ];
  const videoWithCarousel: CustomCarouselProps = {
    data: {
      image: sample5,
      slides: [
        {
          title: "Choose your AI agent's look. Customize their personalities in seconds.",
          description: "Create, manage, and deploy AI influencers that represent your brand and engage your target audience 24/7.",
          ctas: [
            {
              text: "Launch app",
              link: "#",
              variant: "dark",
            },
          ],
        },
        {
          title: 'Better results',
          description: 'Step into the future of marketing with AI-powered personas that amplify your message and drive unparalleled results.',
          ctas: [
            {
              text: "Create",
              link: "#",
              variant: "dark",
            },
            {
              text: "How to",
              link: "#",
              variant: "light",
            }
          ],
        }
      ]
    }
  };

  return (
    <>
      <TopNav></TopNav>
      
      <Jumbotron title={jumbotronData.title} ctas={jumbotronData.ctas}></Jumbotron>

      <ImageWithSidePanels
        mainMedia={mainImage}
        mainMediaAlt="Kai agent portrait"
        leftPanel={{
          icon: <ArrowTrendingUpIcon className="w-5 h-5" />,
          title: "Be closer",
          media: clientsClick,
          mediaType: "video",
          mediaAlt: "",
          text: "Interact with your community instantly. Telegram, X, and Discord are now available!"
        }}
        rightPanel={{
          icon: <ArrowTrendingUpIcon className="w-5 h-5" />,
          title: "Fast and easy",
          media: promptSample,
          mediaType: "video",
          mediaAlt: "",
          text: "Launch your ICON in seconds with the help or AI and modify what you want to personalize."
        }}
      />

      <TopGlitchSeparator/>

      <PeopleSlider title={agentsCarouselTitle} subtitle={agentsCarouselSubtitle} items={agentsCarouselData} />

      <BottomGlitchSeparator/>

      <CustomTabs
        title="Choose Your Style: Anime or Hyperrealistic"
        subtitle={<>Transform your digital presence with <b>ICONs</b> that align with your brand identity. Customize your <b>ICON’s</b> appearance to match your audience, choosing between two distinct visual styles.</>}
        tabs={tabs}
      />

      <ClaimBlock></ClaimBlock>

      <CustomCarousel data={videoWithCarousel.data}/>

      <OpenSource></OpenSource>

      <Footer></Footer>
    </>
  );
}

export default App;