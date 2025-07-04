import { Github, Linkedin, Mail } from "lucide-react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import "./App.css"

function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <section className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2 text-black">Oghenero Ologe</h1>
          <p className="text-lg text-gray-600">
            Full Stack Developer | Web3 Engineer | Smart Contract Specialist
          </p>
          <div className="flex justify-center mt-4 gap-4">
            <a href="https://github.com/NeroOloge" target="_blank">
              <Github className="w-6 h-6 text-gray-700 hover:text-black" />
            </a>
            <a href="https://www.linkedin.com/in/oghenero-ologe-664026203" target="_blank">
              <Linkedin className="w-6 h-6 text-gray-700 hover:text-black" />
            </a>
            <a href="mailto:nologe37@gmail.com">
              <Mail className="w-6 h-6 text-gray-700 hover:text-black" />
            </a>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black text-left mb-4">Summary</h2>
          <p className="text-black text-left">
          Motivated software developer with 2 years of experience in developing 
          and maintaining software applications. Proficient in various 
          programming languages and technologies, including React, Angular, 
          TypeScript, Python and Node.js. Experience in building responsive 
          and accessible web applications, integrating state management 
          libraries, and implementing Agile methodologies, with hands-on 
          experience in backend development and decentralised applications.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black text-left mb-4">Featured Project</h2>
          <Card className="bg-white shadow rounded-3xl">
            <CardContent className="p-6 text-left">
              <h3 className="text-xl font-bold mb-2">
                Decentralised Blogging Platform
              </h3>
              <p className="text-gray-700 mb-4">
                A Web3-based blogging platform where users can post content on IPFS
                and interact using Ethereum smart contracts. Built with Solidity,
                React, and Hardhat.
              </p>
              <div className="flex gap-4">
                <button className="button shadow-sm hover:bg-accent hover:text-accent-foreground">
                  <a href="https://github.com/NeroOloge/mycontent-frontend" target="_blank">
                    View Code
                  </a>
                </button>
                <button className="button shadow bg-primary text-primary-foreground
                  hover:bg-primary/90">
                  <a href="https://mycontent.on-fleek.app" target="_blank">
                    Live Demo
                  </a>
                </button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black text-left mb-4">Experience</h2>
          <Card className="bg-white shadow rounded-3xl">
            <CardContent className="p-6 text-left">
              <h3 className="text-xl font-bold mb-2">
                ComiBlock
              </h3>
              <div className="flex justify-between">
                <h4 className="text-lg font-semibold mb-2">
                  Junior Full Stack Developer
                </h4>
                <span>10/2023 - 09/2024</span>
              </div>
              <ul className="text-gray-700 mb-4 list-disc px-6">
                <li>
                  Designed and implemented blockchain-integrated services 
                  using NestJS, TypeScript, and Web3 libraries for smart 
                  contract interaction and asset management.
                </li>
                <li>
                  Built secure APIs that interfaced with smart contracts 
                  deployed on EVM-compatible blockchains.
                </li>
                <li>
                  Collaborated with frontend teams to support MetaMask-based 
                  authentication and seamless dApp experiences.
                </li>
                <li>
                  Implemented gas optimisation strategies and robust 
                  error-handling for blockchain transactions.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white shadow rounded-3xl">
            <CardContent className="p-6 text-left">
              <h3 className="text-xl font-bold mb-2">
                Teckplus Digital Solutions
              </h3>
              <div className="flex justify-between">
                <h4 className="text-lg font-semibold mb-2">
                  Junior Backend Developer
                </h4>
                <span>10/2022 - 09/2024</span>
              </div>
              <ul className="text-gray-700 mb-4 list-disc px-6">
                <li>
                  Developed and maintained RESTful APIs for web 
                  applications using Node.js and Express.js.
                </li>
                <li>
                  Collaborated with front-end developers to ensure seamless 
                  integration of APIs. 
                </li>
                <li>
                  Conducted unit and integration testing to ensure the quality 
                  and reliability of software products.
                </li>
                <li>
                  Designed and optimised backend systems, processed large datasets 
                  and ensured data quality.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* <section className="mb-12 text-left">
          <h2 className="text-2xl font-semibold mb-4 text-black">Blog Posts</h2>
          <ul className="space-y-4">
            <li>
              <a href="https://dev.to/yourusername/how-i-built-a-decentralised-blog" className="text-blue-600 hover:underline">
                How I Built a Decentralised Blogging Platform (2025)
              </a>
            </li>
            <li>
              <a href="https://medium.com/@yourusername/smart-contract-gas-optimisation-tips" className="text-blue-600 hover:underline">
                Smart Contract Gas Optimisation Tips (2025)
              </a>
            </li>
          </ul>
        </section>

        <section className="text-left text-black">
          <h2 className="text-2xl font-semibold mb-4">Open Source Contributions</h2>
          <ul className="space-y-4">
            <li>
              <p>
                Contributed to <strong>Hardhat</strong> – Improved test framework docs
                and wrote custom plugin
                (<a href="https://github.com/NomicFoundation/hardhat/pulls" className="text-blue-600 hover:underline" target="_blank">see PR</a>)
              </p>
            </li>
            <li>
              <p>
                Participated in ETHGlobal London Hackathon 2025 – Built NFT-based
                academic credentials verifier (<a href="https://github.com/yourusername/ethglobal-2025-project" className="text-blue-600 hover:underline" target="_blank">GitHub</a>)
              </p>
            </li>
          </ul>
        </section> */}
      </section>
    </main>
  );
}

export default Portfolio;