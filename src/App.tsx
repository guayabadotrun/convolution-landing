import TopNav from './components/TopNav';
import Jumbotron, { JumbotronProps } from './components/Jumbotron';
import ImageWithSidePanels from './components/ImageWithSidePanels/ImageWithSidePanels';
import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline';
import mainImage from './assets/images/main-agent-photo.png';
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
    title: "Create, customize, and launch AI-powered digital influencers with ease. Whether you’re a brand, a creator, or a business, Convolution gives you the tools to bring your AI influencer to life.",
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
  const agentsCarouselTitle = 'Elevate your brand with AI Agents';
  const agentsCarouselSubtitle = "Our platform empowers you to design and deploy sophisticated AI agents tailored to your brand's unique needs. From content creation and social media engagement to customer service and lead generation, your AI influencers are ready to elevate your brand to new heights.";
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
        mainImage={mainImage}
        mainImageAlt="Kai agent portrait"
        leftPanel={{
          icon: <ArrowTrendingUpIcon className="w-5 h-5" />,
          title: "Be closer",
          image: mainImage,
          imageAlt: "",
          text: "Interact with your community instantly. Telegram, X, and Discord are now available!"
        }}
        rightPanel={{
          icon: <ArrowTrendingUpIcon className="w-5 h-5" />,
          title: "Always available",
          image: mainImage,
          imageAlt: "",
          text: "Do you want to give 24/7 support? Let your agent work."
        }}
      />

      <TopGlitchSeparator/>

      <PeopleSlider title={agentsCarouselTitle} subtitle={agentsCarouselSubtitle} items={agentsCarouselData} />

      <BottomGlitchSeparator/>

      <CustomTabs
        title="Choose Your Style: Cartoon or Hyperrealistic"
        subtitle="Transform your digital presence with AI agents that match your brand identity. Choose between two distinct visual styles to create authentic connections with your target audience, each designed to deliver unique engagement experiences."
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