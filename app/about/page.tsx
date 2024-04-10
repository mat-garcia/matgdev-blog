import Header from "../_components/header";

const About = () => {
    return ( 
    <>
    <Header screen="about"></Header>
    <div className='flex flex-col justify-center items-center w-full pt-14 px-3'>
        <div className='flex flex-col'>
            <h1 className='border-b border-solid pb-1 border-cyan-400'>About</h1>
        </div>
        <p className="text-2xl pt-10">Olá me chamo <b>Mateus Garcia</b> e sou <b>Desenvolvedor Fullstack</b> com mais de 3 anos de xp. <br/></p>
        <p className="text-xl text-gray-300 pt-10 "> 
                
            Ao longa desses anos eu trabalhei em projetos do setor Hoteleiro utilizando técnologias como php, java e spring boot. <br/>
            Tive a oportunidade de liderar o desenvolvimento de uma API RestFull ultilizando os recursos do SpringBoot onde tambem <br/>
            implementei autenticação com OAuth2 e o WorkFlow CI que fazia o build e gerava release de forma automatizada. <br/>
            Este projeto tinha como objetivo, integrar varias reservas oriundas de Canais de Reserva no Sistema PMS dos Hoteis. <br/>
            Gerando assim uma grande entrega de valor tanto para os clientes quanto para empresa em que atuava. <br/>
            Fora este, eu tambem atuava no sistema PMS em php da empresa, na manutenção e criaçao de novas feats além de<br/>
            implementar testes unitarios e melhor a automatização do deploy com Github Actions. <br/>
            <br/>
            Fora do trabalho , sou casado , pai de um menininho lindo s2, Gamer e nas horas vagas sempre <br/>
            estudo e atuo nos meus projetos pessoais como este blog {':)'}
            <br/>
            <br/>
            Criei este blog como projeto de estudo do react/nextjs que no fim torna-se um ambiente para compartilhar todo <br/>
            meu conhecimento adquirido no dia-a-dia.

            <br />
            <br />
            Entusiasta de Boas Praticas, Metodologias Ageis, Automatizar tudo oque eu puder com o poder das Actions rsrs, <br/>
            amante de react , nextJs e principalmente SpringBoot que me trouxe a paixao por Java s2 e explorador de Arquitetura Software <br/>
            buscando sempre inovações e formas diferentes de codar sistemas.
        
            

        </p>
    </div>
    </>
 );
}
 
export default About;