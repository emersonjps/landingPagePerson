import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Skills() {
  const [softSkillsVisible, setSoftSkillsVisible] = useState(false);
  const [hardSkillsVisible, setHardSkillsVisible] = useState(false);
  const [techToolsVisible, setTechToolsVisible] = useState(false);
  const [certificationsVisible, setCertificationsVisible] = useState(false);

  const toggleAll = (isVisible: boolean) => {
    setSoftSkillsVisible(isVisible);
    setHardSkillsVisible(isVisible);
    setTechToolsVisible(isVisible);
    setCertificationsVisible(isVisible);
  };

  return (
    <div>
      <ul className="text-sm">
        <li>
          <strong onClick={() => setSoftSkillsVisible(!softSkillsVisible)} className="cursor-pointer flex items-center">
            {softSkillsVisible ? <FaChevronUp className="mr-2" /> : <FaChevronDown className="mr-2" />} Soft Skills
          </strong>
          {softSkillsVisible && (
            <ul className="ml-4">
              <li>Resolução de problemas</li>
              <li>Gestão de tempo</li>
              <li>Trabalho em equipe</li>
              <li>Liderança de pequenas equipes</li>
              <li>Comunicação eficaz</li>
              <li>Aprendizado contínuo</li>
              <li>Adaptação a novas ferramentas e tecnologias</li>
              <li>Aplicação de boas práticas (ex.: Clean Code)</li>
              <li>Foco em acessibilidade e retenção de usuários</li>
            </ul>
          )}
        </li>
        <br />
        <li>
          <strong onClick={() => setHardSkillsVisible(!hardSkillsVisible)} className="cursor-pointer flex items-center">
            {hardSkillsVisible ? <FaChevronUp className="mr-2" /> : <FaChevronDown className="mr-2" />} Hard Skills
          </strong>
          {hardSkillsVisible && (
            <ul className="ml-4">
              <li>
                <strong onClick={() => setTechToolsVisible(!techToolsVisible)} className="cursor-pointer flex items-center">
                  {techToolsVisible ? <FaChevronUp className="mr-2" /> : <FaChevronDown className="mr-2" />} Tecnologias e Ferramentas
                </strong>
                {techToolsVisible && (
                  <ul className="ml-4">
                    <li>Linguagens: JavaScript, TypeScript</li>
                    <li>Frameworks e bibliotecas: Next.js, Nest.js, React, Express</li>
                    <li>Bancos de dados: MySQL, PostgreSQL, MariaDB, MongoDB</li>
                    <li>Infraestrutura e deploy: AWS (E2C, S3), Heroku, Hostgator</li>
                    <li>Arquiteturas: MVC, MVVM</li>
                    <li>Testes: Jest (unitários), Cypress (E2E)</li>
                    <li>Desenvolvimento Ágil: SCRUM, Kanban</li>
                    <li>Versionamento de código: Git, GitHub</li>
                    <li>Modelagem: UML</li>
                  </ul>
                )}
              </li>
              <li>
                <strong onClick={() => setCertificationsVisible(!certificationsVisible)} className="cursor-pointer flex items-center">
                  {certificationsVisible ? <FaChevronUp className="mr-2" /> : <FaChevronDown className="mr-2" />} Certificações e Cursos Específicos
                </strong>
                {certificationsVisible && (
                  <ul className="ml-4">
                    <li>Segurança em API REST (Spring Security)</li>
                    <li>Documentação de API REST (Swagger)</li>
                    <li>Bancos de Dados SQL e NoSQL</li>
                    <li>Orientação a Objetos (Java)</li>
                    <li>Testes de dependências e unitários</li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
      </ul>
      <div className='mt-10'>
        <div onClick={() => toggleAll(true)} className="mb-4 cursor-pointer inline-flex items-center text-gray-400 text-sm">
          <FaChevronDown className="mr-2" />
          Expandir Todos
        </div>
        <div onClick={() => toggleAll(false)} className="mb-4 ml-2 cursor-pointer inline-flex items-center text-gray-400 text-sm">
          <FaChevronUp className="mr-2" />
          Recolher Todos
        </div>
      </div>
    </div>
  );
}