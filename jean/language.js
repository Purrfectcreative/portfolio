let language;
const languages = {
  pt: {
    header: {
      home: "INÍCIO",
      projects: "PROJETOS",
    },
    home: {
      title: "Jeanfranco Fernandes Junior",
      description:
        "Olá e bem-vindo(a) ao meu portfólio! Sou um designer gráfico especializado na criação de logomarcas e identidade visual para empresas e negócios. Com uma paixão pela estética visual e uma mente inovadora, estou aqui para levar a sua marca ao próximo nível. <br />Imagine uma identidade visual que capture a essência da sua empresa, transmitindo sua visão e valores de maneira única. Ao confiar em minha experiência e habilidades em design, posso criar logomarcas que se destacam e impressionam. Cada elemento é cuidadosamente projetado para transmitir uma mensagem clara e criar uma conexão instantânea com seu público-alvo. <br />Além disso, meu trabalho abrange muito mais do que apenas logomarcas. Tenho experiência em design de interface visual para sites e aplicativos, garantindo uma experiência de usuário envolvente e intuitiva. Cada detalhe é meticulosamente pensado para criar um design coeso, atraente e funcional, proporcionando uma interação fluida e memorável com seus usuários. <br />E quando se trata de dar vida às suas ideias, estou pronto para ir além dos limites. Minha paixão pela criação se estende à modelagem 3D e à escultura, permitindo-me transformar conceitos em realidade tangível. Seja para projetar produtos, criar protótipos ou oferecer uma perspectiva visual impressionante, minha habilidade em modelagem 3D e escultura trará uma nova dimensão ao seu projeto.",
      buttonText: "VER PROJETOS",
    },
    projects: {
      title: "Projetos",
      logos: [
        {
          img: "./assets/logos/atlaua-god-of-water.jfif",
          title: "ATLAUA God of Water",
          description:
            "Produzimos a melhor Bebida de Hidratação para Atletas de Elite no México/Europa.",
        },
        {
          img: "./assets/logos/afs.png",
          title: "AFS A Future Story",
          description:
            "Nossa missão é fornecer uma rede de seguridade social para todos os sete bilhões de indivíduos neste planeta, combater a mudança climática e escrever uma história melhor para o mundo. - EUA",
        },
        {
          img: "./assets/logos/astero-crm.png",
          title: "ASTERO CRM",
          description:
            "O AsteroCRM é uma plataforma SCRM (Social Customer Relationship Management) de próxima geração. - China",
        },
        {
          img: "./assets/logos/the-final-fix.jfif",
          title: "The Final Fix",
          description:
            "Uma empresa de corretagem, manutenção e administração de aeronaves (aviões e helicópteros) - EUA",
        },
        {
          img: "./assets/logos/dads-matter.jfif",
          title: "Dads Matter",
          description:
            "Conscientizando sobre a pandemia para lares sem pais. - EUA",
        },
        {
          img: "./assets/logos/titan-trading.jpg",
          title: "Titan Trading",
          description: "Assinaturas de sinais de negociação - EUA",
        },
        {
          img: "./assets/logos/mens-room.jpg",
          title: "Men‘s Room",
          description: "BARBEARIA - EUA",
        },
        {
          img: "./assets/logos/space-mule-code.jpg",
          title: "Space Mule Code",
          description:
            "Construindo soluções tecnológicas para organizações e empresas para aprimorar seus negócios. Minha empresa cria aplicativos móveis e sites - EUA",
        },
        {
          img: "./assets/logos/paws-of-angels.png",
          title: "Paws Of Angels",
          description: "pet shop. - EUA",
        },
      ],
    },
    footer: "₢2023 | Todos os direitos reservados. Purr-fect creative.",
  },
  en: {
    header: {
      home: "HOME",
      projects: "PROJECTS",
    },
    home: {
      title: "Jeanfranco Fernandes Junior",
      description:
        "Hello and welcome to my portfolio! I'm a graphic designer specializing in creating logos and visual identities for companies and businesses. With a passion for visual aesthetics and an innovative mindset, I'm here to take your brand to the next level. <br/>Imagine a visual identity that captures the essence of your company, conveying your vision and values in a unique way. By relying on my design expertise and skills, I can create standout logos that leave a lasting impression. Every element is carefully crafted to deliver a clear message and establish an instant connection with your target audience. <br/>But my work goes beyond just logos. I have experience in visual interface design for websites and applications, ensuring an engaging and intuitive user experience. Every detail is meticulously considered to create a cohesive, attractive, and functional design, providing a seamless and memorable interaction for your users. <br/>And when it comes to bringing your ideas to life, I'm ready to push the boundaries. My passion for creation extends to 3D modeling and sculpture, allowing me to transform concepts into tangible reality. Whether it's designing products, creating prototypes, or offering stunning visual perspectives, my 3D modeling and sculpture skills will add a new dimension to your project. <br/>I'm committed to providing you with personalized service and meeting your specific needs. By working closely together, I'll dedicate time and effort to understand your goals and transform them into visually impactful results. <br/>If you're ready to elevate your brand, website, application, or project to the next level, please don't hesitate to get in touch with me to discuss your ideas and embark on this creative journey together. I'm excited to collaborate and bring the vision you imagine to reality. <br/>Let me help you create a successful brand. Your story deserves to be told in a captivating and memorable way.",
      buttonText: "SEE PROJECTS",
    },
    projects: {
      title: "Projects",
      logos: [
        {
          img: "./assets/logos/atlaua-god-of-water.jfif",
          title: "ATLAUA God of Water",
          description:
            "We produce the best Hydration Drink for Elite Athletes in Mexico/Europe.",
        },
        {
          img: "./assets/logos/afs.png",
          title: "AFS A Future Story",
          description:
            "ur mission is to provide a social security net for all seven billion individuals on this planet, to fight climate change, and to write a better story for the world. - EUA",
        },
        {
          img: "./assets/logos/astero-crm.png",
          title: "ASTERO CRM",
          description:
            "AsteroCRM is a next generation lightweight SCRM (Social Customer Relationship Management) platform. - China",
        },
        {
          img: "./assets/logos/the-final-fix.jfif",
          title: "The Final Fix",
          description:
            "An aircraft (planes & helicopters) brokerage, maintenance, management firm. = EUA",
        },
        {
          img: "./assets/logos/dads-matter.jfif",
          title: "Dads Matter",
          description:
            "Bringing awareness to the pandemic that is fatherless homes. - EUA",
        },
        {
          img: "./assets/logos/titan-trading.jpg",
          title: "Titan Trading",
          description: "Trading signals subscriptions. - EUA",
        },
        {
          img: "./assets/logos/mens-room.jpg",
          title: "Men‘s Room",
          description: "BARBER SHOPPING. - EUA",
        },
        {
          img: "./assets/logos/space-mule-code.jpg",
          title: "Space Mule Code",
          description:
            "Building tech solutions for organizations and companies to enhance their business. My company builds mobile applications and websites. - EUA",
        },
        {
          img: "./assets/logos/paws-of-angels.png",
          title: "Paws Of Angels",
          description: "pet shop. - EUA",
        },
      ],
    },
    footer: "₢2023 | All rights reserved. Purr-fect creative.",
  },
};

async function getLanguage() {
  let navigatorLanguage = navigator.language.split("-")[0];
  let choosedLanguage = localStorage.getItem("lang");

  if (choosedLanguage === null) {
    if (navigatorLanguage !== "pt" && navigatorLanguage !== "en") {
      // Trocar para EN
      // const res = await fetch("./language/pt.json");
      // language = await res.json();
      language = languages["en"];
    } else {
      // const res = await fetch(`./language/${navigatorLanguage}.json`);
      // language = await res.json();
      language = languages[navigatorLanguage];
    }
  } else {
    // const res = await fetch(`./language/${choosedLanguage}.json`);
    // language = await res.json();
    language = languages[choosedLanguage];
  }

  // HEADER
  $("#headerHome").text(language.header.home);
  $("#headerProjects").text(language.header.projects);

  // HOME
  $("#homeTitle").text(language.home.title);
  $("#homeDescription").html($.parseHTML(language.home.description));
  $("#homeButton").text(language.home.buttonText);

  // PROJETOS
  $("#projectsTitle").text(language.projects.title);

  for (let p of language.projects.logos) {
    $("#galeria").append(`<div class="imagem">
    <div class="texto">
      <span>${p.title}</span>
      <small
        >${p.description}</small
      >
    </div>
    <img
      src="${p.img}"
      alt="${p.title}"
    />
  </div>`);
  }

  // FOOTER
  $("#footerHome").text(language.header.home);
  $("#footerProjects").text(language.header.projects);
  $("#copyrightText").text(language.footer);
}

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  location.reload();
}

getLanguage();
