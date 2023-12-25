import {useEffect, useState} from "react";

export const useGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        setGames([
            {id: "1", name: "The Last Of Us", releaseDate:"06-14-2013", description:"Ambientado en un mundo post-apocalíptico, el juego sigue la historia de Joel, un hombre atormentado por su pasado, y Ellie, una joven valiente con un secreto potencialmente revolucionario.La trama se desarrolla en un Estados Unidos devastado por una infección que ha transformado a gran parte de la población en criaturas hostiles y peligrosas. Mientras Joel y Ellie se embarcan en un peligroso viaje a través de este paisaje desolado, enfrentan numerosos desafíos y encuentran diversos personajes que les ayudan o se interponen en su camino.", genre: "Narrative, Action", rating: 9.5, platform: "PS4", company: "Naughty Dog", backgroundImage:"https://media.rawg.io/media/games/a5a/a5a7fb8d9cb8063a8b42ee002b410db6.jpg", trailer:"https://www.youtube.com/embed/W01L70IGBgE", screenshots: ["https://media.rawg.io/media/screenshots/e58/e5851e0c9b08172369dc1a1814b1c275.jpg","https://media.rawg.io/media/screenshots/4a8/4a8bc73ffc37e6794fd962736d0a5436.jpg","https://media.rawg.io/media/screenshots/fd5/fd5e75708c5d123519f5329344d0a376.jpg","https://media.rawg.io/media/screenshots/bf4/bf4453d613de19b737fbd5e6f5e1a069.jpg","https://media.rawg.io/media/screenshots/e2e/e2e3d4facc46efbded4898106db91cc6.jpg","https://media.rawg.io/media/screenshots/d07/d077fc6929186334ef47716abd5fd119.jpg"]},
            {id: "2", name: "Red Dead Redemption 2", releaseDate:"10-26-2018",description: "Ambientado en 1899, el juego sigue la historia de Arthur Morgan, un miembro destacado de una banda de forajidos liderada por Dutch van der Linde. La trama se desarrolla en un vasto mundo abierto, recreando el Oeste Americano y ofreciendo a los jugadores una experiencia inmersiva con una narrativa profunda y personajes memorables. Arthur y la banda enfrentan una serie de desafíos mientras buscan sobrevivir en un mundo en constante cambio, donde la ley y los forajidos coexisten de maneras complejas." , genre: "Action, Adventure", rating: 9.8, platform: "PS4", company: "Rockstar Games", backgroundImage:"https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg", trailer:"https://www.youtube.com/embed/MyaYlbizpvs", screenshots: ["https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg","https://media.rawg.io/media/screenshots/b8c/b8cee381079d58b981594ede46a3d6ca.jpg","https://media.rawg.io/media/screenshots/fd6/fd6e41d4c30c098158568aef32dfed35.jpg","https://media.rawg.io/media/screenshots/2ed/2ed3b2791b3bbed6b98bf362694aeb73.jpg","https://media.rawg.io/media/screenshots/857/8573b9f4f06a0c112d6e39cdf3544881.jpg","https://media.rawg.io/media/screenshots/985/985e3e1f1d1af1ab0797d43a95d472cc.jpg"]},
            {id: "3", name: "The Legend of Zelda: Breath of the Wild", releaseDate:"03-03-2017", description:"El juego se destaca por su vasto mundo abierto y la libertad que ofrece a los jugadores para explorar y descubrir. Hyrule se presenta como un extenso y diverso paisaje lleno de montañas, bosques, ríos y más, todo ello repleto de criaturas y desafíos. Los jugadores pueden completar mazmorras, resolver puzles, recolectar recursos y mejorar las habilidades de Link mientras avanzan en la historia.", genre: "Action, Adventure", rating: 9.7, platform: "Switch", company: "Nintendo", backgroundImage:"https://media.rawg.io/media/games/cc1/cc196a5ad763955d6532cdba236f730c.jpg", trailer:"https://www.youtube.com/embed/ofH5ptn5w-A", screenshots: ["https://media.rawg.io/media/screenshots/3c4/3c4a8f6b1994def75e73e1cb64624e7f.jpg","https://media.rawg.io/media/screenshots/8f5/8f5d4264b12090bb7aa5626fcfb5be18.jpg","https://media.rawg.io/media/screenshots/b77/b771adc0585c655f8a747d3160e5325a.jpg","https://media.rawg.io/media/screenshots/ef7/ef7d89471e5c0dc5553c249b2c34d9cd.jpg","https://media.rawg.io/media/screenshots/1e5/1e58e8a064da6906f09dba1edb3fdea6.jpg","https://media.rawg.io/media/screenshots/bef/bef44f5547b97d44c5e14f8773f9876c.jpg"]},
            {id: "4", name: "God of War", releaseDate:"03-22-2005", description:"En \"God of War\", los jugadores toman el papel de Kratos, un guerrero espartano que busca venganza contra Ares, el dios de la guerra, por engañarlo y matar a su familia. La trama se desarrolla en un mundo inspirado en la mitología griega, donde Kratos debe enfrentarse a todo tipo de criaturas mitológicas y desafíos mientras busca su redención.", genre: "Action, Adventure", rating: 9.6, platform: "PS4", company: "Santa Monica Studio", backgroundImage:"https://media.rawg.io/media/games/1aa/1aa4ca34a8a6bb57a2e065c8332dc230.jpg", trailer:"https://www.youtube.com/embed/Hf2adVqQn3g", screenshots: ["https://media.rawg.io/media/screenshots/d3e/d3ee4420b00d327de2c58ba67f5795a2.jpg","https://media.rawg.io/media/screenshots/fd7/fd72b4c08fd85fb2d045dbbf6f57a157.jpg","https://media.rawg.io/media/screenshots/277/2770a1c5c74f7c955bfaf1f6f47d8d7b.jpg","https://media.rawg.io/media/screenshots/0f5/0f5d809cbe088510231acf5877531642.jpg","https://media.rawg.io/media/screenshots/0f5/0f5d809cbe088510231acf5877531642.jpg","https://media.rawg.io/media/screenshots/0f5/0f5d809cbe088510231acf5877531642.jpg"]},
            {id: "5", name: "Super Mario Odyssey", releaseDate:"10-27-2017", description:"El juego es conocido por su innovador sistema de juego que permite a Mario capturar y controlar temporalmente a varios personajes y objetos utilizando su sombrero, conocido como Cappy. Esta mecánica introduce una variedad de habilidades y estrategias, permitiendo a los jugadores navegar por niveles de manera única y descubrir secretos ocultos.", genre: "Platformer", rating: 9.7, platform: "Switch", company: "Nintendo", backgroundImage:"https://media.rawg.io/media/games/267/267bd0dbc496f52692487d07d014c061.jpg", trailer:"https://www.youtube.com/embed/wGQHQc_3ycE", screenshots: ["https://media.rawg.io/media/screenshots/a38/a38e8c2161eb6c3c233b0488a3c2d5f1.jpg","https://media.rawg.io/media/screenshots/ff8/ff80f35e3301fa9c0027d9f021c24340.jpg","https://media.rawg.io/media/screenshots/82c/82ce6aa4915756bd39cd1e6a02e17a77.jpg","https://media.rawg.io/media/screenshots/28b/28bb29070fce9fc1e45900aaebe83b2a.jpg","https://media.rawg.io/media/screenshots/014/014e53bf0f33afc3a0d0fcfaa2715f73.jpg","https://media.rawg.io/media/screenshots/02d/02d7425ce977a7a556beadbac4a2ae63.jpg"]},
            {id: "6", name: "The Witcher 3: Wild Hunt", releaseDate:"05-19-2015", description:"Basado en la serie de libros de fantasía del mismo nombre del autor polaco Andrzej Sapkowski, el juego continúa las aventuras de Geralt de Rivia, un cazador de monstruos conocido como un \"witcher\", mientras busca a su hija adoptiva, Ciri, quien está siendo perseguida por la Cacería Salvaje, un grupo de espectros liderados por el Rey de la Noche.", genre: "RPG", rating: 9.8, platform: "PS4", company: "CD Projekt", backgroundImage:"https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg", trailer:"https://www.youtube.com/embed/XHrskkHf958", screenshots: ["https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg","https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg","https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg","https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg","https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg","https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg"]},
            {id: "7", name: "Halo: Reach", releaseDate:"09-14-2010", description:"La trama de \"Halo: Reach\" se sitúa antes de los eventos del primer juego de \"Halo: Combat Evolved\". El juego sigue a un grupo de soldados conocidos como Noble Team, que son Spartan-III super-soldados, en su lucha contra una invasión Covenant en el planeta Reach, la última línea de defensa de la humanidad antes de la Tierra. A lo largo del juego, los jugadores experimentan eventos desesperados y heroicos mientras el equipo lucha contra probabilidades abrumadoras y sacrifica todo en su defensa de Reach.", genre: "Shooter", rating: 9.4, platform: "Xbox", company: "Bungie", backgroundImage:"https://media.rawg.io/media/games/045/0457f748c9492261ccb46147edf9c761.jpg", trailer:"https://www.youtube.com/embed/kco1sYXGwYE", screenshots: ["https://media.rawg.io/media/screenshots/36e/36e2b35282b7a413dae48789ffbd6651.jpg","https://media.rawg.io/media/screenshots/b36/b3652fd9a223a6ed95a1d933ff181425.jpg","https://media.rawg.io/media/screenshots/395/3951c9f13e83cd74d794469a67659280.jpg","https://media.rawg.io/media/screenshots/14f/14f906f9dcaadd50251bd87bdfaa3c2e.jpg","https://media.rawg.io/media/screenshots/8ff/8ffa358080ab334f572387681cc86ae5.jpg","https://media.rawg.io/media/screenshots/2a8/2a86a45da621293cb0a28bcf69d2aee6.jpg"]},
            {id: "8", name: "Uncharted 4: A Thief's End", releaseDate:"05-10-2016", description:"En \"Uncharted 4\", Nathan Drake se encuentra retirado de la caza de tesoros después de su última aventura. Sin embargo, se ve obligado a regresar al mundo de los cazadores de tesoros cuando su hermano, Sam, reaparece después de estar desaparecido durante años. Juntos, los hermanos Drake emprenden una búsqueda global del tesoro pirata perdido del capitán Henry Avery, enfrentándose a peligrosos enemigos, resolviendo intrincados acertijos y enfrentando dilemas morales en el camino.", genre: "Action, Adventure", rating: 9.5, platform: "PS4", company: "Naughty Dog", backgroundImage:"https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg", trailer:"https://www.youtube.com/embed/34GJ9ZMAKqA", screenshots: ["https://media.rawg.io/media/screenshots/fd5/fd5451e27048c3e416de1737047e4684.jpg","https://media.rawg.io/media/screenshots/63f/63f551c55bb44ec41dbcab6898cdd264.jpg","https://media.rawg.io/media/screenshots/30b/30bfd42d8bfe46301dbef56ba526b3ed.jpg","https://media.rawg.io/media/screenshots/fd2/fd2ae2bc22f4fefeeb6f4b6f1587e128.jpg","https://media.rawg.io/media/screenshots/66c/66c2aecdd80e940ea7a2d64c17cff843.jpg","https://media.rawg.io/media/screenshots/89c/89c96f28e032d3434bab7b9247e01fe3.jpg"]},
            {id: "9", name: "Super Smash Bros. Ultimate", releaseDate:"12-07-2018",description:"Lo que distingue a \"Super Smash Bros. Ultimate\" de otros juegos de lucha es su amplio elenco de personajes jugables. El juego presenta a todos los luchadores que han aparecido en entregas anteriores de la serie, lo que suma un total de más de 70 personajes jugables. Esto incluye personajes icónicos de Nintendo como Mario, Link de \"The Legend of Zelda\", Pikachu de \"Pokémon\", y muchos otros, así como personajes invitados de otras franquicias, como Sonic the Hedgehog, Solid Snake de Metal Gear, y muchos más.", genre: "Fighting", rating: 9.6, platform: "Switch", company: "Nintendo", backgroundImage:"https://media.rawg.io/media/games/9f3/9f3c513b301d8d7250a64dd7e73c62df.jpg", trailer:"https://www.youtube.com/embed/tqSY9mlmWIs", screenshots: ["https://media.rawg.io/media/screenshots/1c9/1c9ae7a68285ad0d4aa046b22bcdc4bf.jpg","https://media.rawg.io/media/screenshots/f67/f670247976d1b8121a5149bdfd8dbc21.jpg","https://media.rawg.io/media/screenshots/e3e/e3eaf49fe84fdc175e07d86d13e5bec5.jpg","https://media.rawg.io/media/screenshots/59d/59df418ec1f82e1410a19f33db40ddce.jpg","https://media.rawg.io/media/screenshots/2e7/2e761888447bae01026e2b882dd4fdab.jpg","https://media.rawg.io/media/screenshots/5ee/5ee9e40bc55def84bfccab09b324f220.jpg"]},
            {id: "10", name: "Grand Theft Auto V", releaseDate:"09-17-2013", description:"El juego se desarrolla en la ficticia ciudad de Los Santos, que se inspira en Los Ángeles, California, y su área circundante. Los jugadores asumen el papel de tres protagonistas principales: Michael De Santa, un ex ladrón de bancos; Franklin Clinton, un estafador que busca ascender en el mundo del crimen; y Trevor Philips, un ex piloto militar con problemas de ira y violencia. Los jugadores alternan entre estos personajes a lo largo de la historia, completando misiones y desafíos en un mundo abierto lleno de posibilidades.", genre: "Action, Adventure", rating: 9.7, platform: "PS4", company: "Rockstar Games", backgroundImage:"https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg", trailer:"https://www.youtube.com/embed/QkkoHAzjnUs",screenshots: ["https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg","https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg","https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg","https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg","https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg","https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg"]},
            {id: "11", name: "Dark Souls III", releaseDate:"04-12-2016", description:"El juego se desarrolla en el mundo ficticio de Lothric, un reino que se encuentra al borde del apocalipsis. Los jugadores asumen el papel de un no-muerto conocido como el \"Elegido\", cuya misión es recuperar las almas de los Señores de Cinder, figuras poderosas que anteriormente enlazaron la llama y mantuvieron el equilibrio del mundo. A lo largo de su viaje, los jugadores se enfrentarán a numerosos enemigos desafiantes, incluidos jefes memorables que requieren habilidad, estrategia y paciencia para ser derrotados.", genre: "Action, RPG", rating: 9.4, platform: "PS4", company: "FromSoftware", backgroundImage:"https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg", trailer:"https://www.youtube.com/embed/cWBwFhUv1-8",screenshots: ["https://media.rawg.io/media/screenshots/d7c/d7c05cdfb30ec07147bcd0d3985ec54c.jpg","https://media.rawg.io/media/screenshots/479/479cb74c874748ca70a3a14e79a0c232.jpg","https://media.rawg.io/media/screenshots/070/0703edc6d3db345a3acf19b4e6e43ebd.jpg","https://media.rawg.io/media/screenshots/e4f/e4feaf5b078949102e72780091eb12af.jpg","https://media.rawg.io/media/screenshots/028/02863a140eea53c1f51fd790aca753aa.jpg","https://media.rawg.io/media/screenshots/8d2/8d2c0bb90867031f9265ef62c01445c5.jpg"]},
            {id: "12", name: "Minecraft", releaseDate:"11-18-2011", description:"En Minecraft, los jugadores se encuentran en un mundo generado procedimentalmente, compuesto por bloques cúbicos que representan diversos materiales y entidades. El juego ofrece una experiencia sin guiones ni objetivos fijos, permitiendo a los jugadores explorar, recolectar recursos, crear herramientas y construir estructuras utilizando los bloques que encuentran.", genre: "Sandbox", rating: 9.3, platform: "Multiple", company: "Mojang", backgroundImage:"https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg", trailer:"https://www.youtube.com/embed/MmB9b5njVbA",screenshots: ["https://media.rawg.io/media/screenshots/324/32454b11adde40d87c046f310f0d710d.jpg","https://media.rawg.io/media/screenshots/268/2689f04cbcabb467dd4948e30fe90f51.jpg","https://media.rawg.io/media/screenshots/e83/e83fbaf3a8bdf1cdd855acf8fc90d2fe.jpg","https://media.rawg.io/media/screenshots/a02/a021bf48ee5e492026e6464b3751cf35.jpg","https://media.rawg.io/media/screenshots/0cc/0cc6c1534e782b9d040c665a1f78c6f7.jpg","https://media.rawg.io/media/screenshots/3f6/3f66dd84a110f796a80baa4539430b68.jpg"]},
            {id: "13", name: "Fortnite", releaseDate:"07-25-2017", description:"En Fortnite, los jugadores son lanzados en un mapa donde compiten contra otros 99 jugadores en tiempo real. El objetivo principal es ser el último jugador o equipo en pie. A medida que avanza la partida, una tormenta mortal se acerca, reduciendo constantemente el área segura del mapa y forzando a los jugadores a moverse y adaptarse a la situación.", genre: "Battle Royale", rating: 9.1, platform: "Multiple", company: "Epic Games", backgroundImage:"https://media.rawg.io/media/games/d97/d97f663b752a6484df105993f17abb49.jpg" , trailer:"https://www.youtube.com/embed/1XcgbOAkRIQ", screenshots: ["https://media.rawg.io/media/screenshots/4f9/4f9cc8bb70ac0f19e07491acd2c26ebe.jpg","https://media.rawg.io/media/screenshots/725/7259b393fb824eb050eead8e98adad95.jpg","https://media.rawg.io/media/screenshots/810/810d31cf9612a342c3491f25f953f96c.jpg","https://media.rawg.io/media/screenshots/795/7954a1ead6eaa2cb480a3eeaa5a79eaf.jpg","https://media.rawg.io/media/screenshots/af3/af3c2aa70378ce7c34979207f0fa8c91.jpg","https://media.rawg.io/media/screenshots/a33/a33fa7ed9d72280625fb97acafea1839.jpg"]},
            {id: "14", name: "Overwatch", releaseDate:"05-24-2016", description:"En Overwatch, los jugadores eligen entre una variedad de héroes, cada uno con habilidades y estilos de juego únicos, clasificados en diferentes roles como tanques, daño y apoyo. El juego se centra en partidas multijugador 6v6 en diferentes modos de juego, donde los equipos compiten por alcanzar objetivos específicos, como capturar puntos, escoltar cargas o defender áreas.", genre: "Shooter", rating: 9.2, platform: "Multiple", company: "Blizzard Entertainment", backgroundImage:"https://media.rawg.io/media/games/4ea/4ea507ceebeabb43edbc09468f5aaac6.jpg", trailer:"https://www.youtube.com/embed/Eu7_o0g4n3U", screenshots: ["https://media.rawg.io/media/screenshots/879/8794242f393b3258e97b690a4138d056.jpg","https://media.rawg.io/media/screenshots/9b0/9b060d7b7d606cc3717face57c9f0910.jpg","https://media.rawg.io/media/screenshots/e41/e4141f6ea03587e73f69bbe6cd2c208b.jpg","https://media.rawg.io/media/screenshots/e8d/e8d281e3bf2c0a91a4576c8ed563983b.jpg","https://media.rawg.io/media/screenshots/d81/d81886c7a27ef73a495492eeaf71a742.jpg","https://media.rawg.io/media/screenshots/630/630c8a1234a453167bd7dc18db5e0d80.jpg"]},
            {id: "15", name: "Persona 5", releaseDate:"04-04-2017", description:"En Persona 5, los jugadores asumen el papel de un estudiante de secundaria transferido a la Escuela Shujin en Tokio, donde se encuentra con una serie de estudiantes que se convierten en sus aliados en una aventura que combina la vida cotidiana de un estudiante con la lucha contra entidades sobrenaturales conocidas como Sombras. Los personajes principales pueden invocar Personas, manifestaciones poderosas de sus psiques interiores, para combatir y explorar mazmorras surrealistas que representan los corazones corruptos de individuos en el mundo real.", genre: "RPG", rating: 9.5, platform: "PS4", company: "Atlus", backgroundImage:"https://media.rawg.io/media/games/3ea/3ea0e57ede873970c0f1130e30d88749.jpg", trailer:"https://www.youtube.com/embed/QnDzJ9KzuV4",screenshots: ["https://media.rawg.io/media/screenshots/d8a/d8a5609a55476906afa237d9890521ea.jpg","https://media.rawg.io/media/screenshots/693/693dc8a4fe928593d2830d4357893683.jpg","https://media.rawg.io/media/screenshots/6dc/6dc55ac06152af2b7101478f11b2ed3c.jpg","https://media.rawg.io/media/screenshots/707/7075e86af0f6a2953452073427f55f6a.jpg","https://media.rawg.io/media/screenshots/aa0/aa005bcc19a0c65b3c10466e4383ae12.jpg","https://media.rawg.io/media/screenshots/bb2/bb284b778955d9383cb9098dbc487971.jpg"]},
            {id: "16", name: "Bloodborne", releaseDate:"03-24-2015", description:"La historia de Bloodborne se sitúa en la ciudad gótica de Yharnam, conocida por sus tradiciones médicas y la búsqueda de una cura milagrosa. Los jugadores toman el papel de un cazador que busca remediar una enfermedad misteriosa que ha afectado a la ciudad. A medida que avanzan, se enfrentan a una variedad de criaturas grotescas y aterradoras, desde simples bestias hasta seres cósmicos y entidades aún más siniestras.", genre: "Action, RPG", rating: 9.6, platform: "PS4", company: "FromSoftware", backgroundImage:"https://media.rawg.io/media/games/214/214b29aeff13a0ae6a70fc4426e85991.jpg" , trailer:"https://www.youtube.com/embed/TmZ5MTIu5hU", screenshots: ["https://media.rawg.io/media/screenshots/75a/75a67f69575ebfc412a70cdde7fb8923.jpg","https://media.rawg.io/media/screenshots/280/280b0e8492a247b718a3c14c41052a16.jpg","https://media.rawg.io/media/screenshots/d8e/d8e17e4899561a0a25e0728541b1cac9.jpg","https://media.rawg.io/media/screenshots/48c/48cfa5b44c1a6787971889bc7646ca47.jpg","https://media.rawg.io/media/screenshots/472/472f9b7dfb71ac5d6880e94dd1c1a77c.jpg","https://media.rawg.io/media/screenshots/c6d/c6de8c602de1cf1798353aa83a830948.jpg"]},
            {id: "17", name: "Animal Crossing: New Horizons", releaseDate:"03-20-2020", description:"En Animal Crossing: New Horizons, los jugadores asumen el papel de un personaje que se embarca en una nueva vida en una isla desierta. A medida que avanza el juego, los jugadores pueden recolectar recursos, construir y personalizar su hogar, interactuar con una variedad de personajes animales antropomórficos y participar en una amplia gama de actividades, desde la pesca y la recolección de insectos hasta la decoración y el diseño de su isla.", genre: "Life Simulation", rating: 9.4, platform: "Switch", company: "Nintendo", backgroundImage:"https://media.rawg.io/media/games/42f/42fe1abd4d7c11ca92d93a0fb0f8662b.jpg", trailer:"https://www.youtube.com/embed/5YPxiTLMcdg", screenshots: ["https://media.rawg.io/media/screenshots/b0a/b0aa06013e49bb076cdcffffefd2589d.jpg","https://media.rawg.io/media/screenshots/370/370b897d33452edd340500d0a0b581ec.jpg","https://media.rawg.io/media/screenshots/dd9/dd98f3dd873021ae7d25114ae4af6f6a.jpg","https://media.rawg.io/media/screenshots/181/1811753f75cc66c94da671f4e719f65c.jpg","https://media.rawg.io/media/screenshots/5a0/5a07f0435c035a1752481dd6a1464783.jpg","https://media.rawg.io/media/screenshots/5f1/5f1d6fea2a825136538ce5308d6f7f47.jpg"]},
            {id: "18", name: "Destiny 2", releaseDate:"01-09-2017", description:"El juego se sitúa en un universo de ciencia ficción donde los jugadores asumen el papel de Guardianes, defensores de la última ciudad segura de la Tierra. El título combina elementos de disparos en primera persona con elementos de juegos de rol (RPG), permitiendo a los jugadores personalizar y mejorar sus personajes a lo largo del tiempo.", genre: "Shooter, MMO", rating: 9.0, platform: "Multiple", company: "Bungie", backgroundImage:"https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg", trailer:"https://www.youtube.com/embed/78rj5zVb8pQ", screenshots: ["https://media.rawg.io/media/screenshots/818/818cc34134cb22fb18fda8edec7144a3.jpg","https://media.rawg.io/media/screenshots/003/003a559bc0b47a4e5f2928f18a8d9142.jpg","https://media.rawg.io/media/screenshots/75d/75d8fbb3254f5b06f1a3f9a026d9c122.jpg","https://media.rawg.io/media/screenshots/ca3/ca3bdc1a51fc90a96c860ab6db8a313c.jpg","https://media.rawg.io/media/screenshots/575/5751a70c954618a99ec574f32be7ad43.jpg","https://media.rawg.io/media/screenshots/2e7/2e7304d3b9e670f943d0bd1e4be090f0.jpg"]},
            {id: "19", name: "Final Fantasy VII Remake", releaseDate:"03-03-2020", description:"Este remake ha sido uno de los títulos más esperados por los fans de la serie, ya que moderniza la historia y el sistema de combate del juego original, pero manteniendo su esencia. La historia sigue a Cloud Strife, un ex-soldado convertido en mercenario, que se une al grupo eco-terrorista Avalanche para luchar contra la poderosa corporación Shinra y su control sobre el planeta. A medida que la trama se desarrolla, Cloud y sus aliados se enfrentan a la misteriosa y carismática figura de Sephiroth. ", genre: "RPG", rating: 9.3, platform: "PS4", company: "Square Enix", backgroundImage:"https://media.rawg.io/media/games/d89/d89bd0cf4fcdc10820892980cbba0f49.jpg", trailer:"https://www.youtube.com/embed/mDa45U8AKYU", screenshots: ["https://media.rawg.io/media/screenshots/544/5446711a9711031d937134d0e8040a06.jpg","https://media.rawg.io/media/screenshots/b5d/b5d7f11c81bb76c16b2d82328875f3d0.jpg","https://media.rawg.io/media/screenshots/eae/eae67ac6787641e0cadcfe1f854c015a.jpg","https://media.rawg.io/media/screenshots/0eb/0ebeaf82965655f37a71c446263efce5.jpg","https://media.rawg.io/media/screenshots/96d/96da5da8a2ae31624d70de21f3b9ea64.jpg","https://media.rawg.io/media/screenshots/281/28166327e5932bb0241a59474bea4dfe.jpg"]},
            {id: "20", name: "Assassin's Creed Odyssey", releaseDate:"10-05-2018", description:"Ambientado en la Antigua Grecia durante la Guerra del Peloponeso, el juego permite a los jugadores elegir entre dos personajes principales: Alexios o Kassandra, ambos descendientes de Leonidas I de Esparta. La narrativa sigue una trama épica llena de intrigas políticas, batallas y mitología griega. Además de la trama principal, el juego ofrece una gran cantidad de misiones secundarias y actividades que exploran la vasta y hermosa recreación del mundo griego, desde Atenas hasta Esparta y más allá.", genre: "Action, Adventure", rating: 9.2, platform: "PS4", company: "Ubisoft", backgroundImage:"https://media.rawg.io/media/games/c6b/c6bd26767c1053fef2b10bb852943559.jpg", trailer:"https://www.youtube.com/embed/Asy_p4xStbk", screenshots: ["https://media.rawg.io/media/screenshots/412/412b1dd5c880b80d8404451d3ff44360.jpg","https://media.rawg.io/media/screenshots/9b5/9b59a790deab688ea923e0cd7b0cadbd_sNpbwUf.jpg","https://media.rawg.io/media/screenshots/b09/b09a53fb76ea832671599a5f287ab34a.jpg","https://media.rawg.io/media/screenshots/2f9/2f993667330526171e4056c0a0663437.jpg","https://media.rawg.io/media/screenshots/6d8/6d8c268dff506f890478e6a0a492858b.jpg","https://media.rawg.io/media/screenshots/588/5883818edafd22c8a2e1a45bf6fe07b1.jpg"]},
            {id: "21", name: "Genshin Impact", releaseDate:"09-28-2020", description:"on un estilo artístico impresionante y una jugabilidad inspirada en títulos como \"The Legend of Zelda: Breath of the Wild\", Genshin Impact permite a los jugadores explorar un vasto mundo abierto, enfrentarse a enemigos en tiempo real y descubrir secretos ocultos. Lo que destaca a Genshin Impact es su sistema de combate dinámico donde los jugadores pueden alternar entre varios personajes, cada uno con habilidades únicas y elementos que pueden combinarse estratégicamente para obtener ventajas en batalla. ", genre: "Action RPG", rating: 9.1, platform: "Multiple", company: "miHoYo", backgroundImage:"https://media.rawg.io/media/games/c38/c38bdb5da139005777176d33c463d70f.jpg", trailer:"https://www.youtube.com/embed/HLUY1nICQRY", screenshots: ["https://media.rawg.io/media/screenshots/328/3281a100abdcad4b628066f5e803e309.jpg","https://media.rawg.io/media/screenshots/bf0/bf0928e424c739ee75805f76a380779b.jpg","https://media.rawg.io/media/screenshots/73b/73bfde00fb1652c1b932bb883fc8ac93.jpg","https://media.rawg.io/media/screenshots/e51/e5141aad92413e3ca779f95320c039cb.jpg","https://media.rawg.io/media/screenshots/6f9/6f940de85f1a0dddd232be1a88bd1b61.jpg","https://media.rawg.io/media/screenshots/5af/5af928858e321d15edf2dff1683a5f71.jpg"]},
        ]);
    },[])

    return games;
}