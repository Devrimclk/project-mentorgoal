import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import SimpleSlide from "../components/Slide";

export default function Spitch() {
    return (
     <div className={styles.container}>
        <Head>
          <title>Entretien</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="navbar">
          <Navbar />
        </main>
        <body>
            <div className="body-ent">
                <div className='ent-ent'>
                    <p className='ent'>Entretien</p>
                </div>
                <div className="ent_photo">
                    <img src="https://thumbs.dreamstime.com/b/espace-de-travail-bureau-avec-le-carnet-vide-stylo-la-feuille-papier-et-l-ordinateur-portable-sur-table-en-bois-les-couleurs-doux-109641669.jpg" alt="" className="photo_ent_ent"/>
                </div>
                <div className="separator">
                    <img src="../public/image/separator" alt="" />
                </div>
                <h1 className="perso-ent">
                    Préparer son Spitch
                </h1>
                <p className="date-ent">22 novembre 2022 - Mansour NDAO</p>

                <h2 className="description-ent">Lorem ipsum dolor sit amet consectetur.
                 Semper nulla ut rhoncus vitae proin lectus. Vel nisi quis at adipiscing quisque. 
                 Orci porttitor facilisis at ut aenean volutpat sit nibh. Lacinia sed lacus quam aliquam.
                 Turpis pretium non quam augue in quis enim nam nunc. Sit et aliquam libero euismod dignissim massa et aliquam. 
                 In neque lobortis blandit euismod curabitur pellentesque consectetur varius nunc. Tristique lectus in erat eget in ut in.
                 Orci in tortor diam nisl eu. <br /><br /><br /> Volutpat volutpat ultrices pretium id tristique. 
                 Elit duis cursus sagittis duis. Massa nam porttitor feugiat orci risus dui in vivamus.
                 Mi suscipit tincidunt dolor nulla risus. Accumsan fusce dui eget semper ultrices.
                 In sem placerat odio sed lobortis nisl arcu. Habitant nibh urna nunc morbi morbi amet gravida malesuada eget. 
                 Orci aliquet dictumst ac lectus metus ullamcorper sed faucibus. Lectus felis semper massa in quis. Ut nunc in duis est elit in porttitor at.
                 Semper est facilisis tristique odio et blandit bibendum. Vulputate id sociis leo eu fermentum ultrices in gravida vulputate. Turpis turpis duis non condimentum felis. 
                 Interdum purus gravida tortor neque. Nisl rhoncus gravida eu egestas purus rhoncus.
                 </h2>

                 <h3 className="phrase-ent">Sit amet euismod tortor a sapien</h3>
                <h4 className="explication-ent">Sit amet euismod tortor a sapien. Vitae nulla eros blandit sit accumsan ornare tellus tellus. Erat amet id risus sed. Magna lacus cras enim ultricies arcu amet ultrices. Egestas malesuada bibendum pulvinar sed sodales at bibendum.
                 <br /><br /> Leo consequat augue maecenas ac et volutpat in etiam. A ac gravida egestas lectus cras vel. Laoreet aliquet mattis etiam morbi mauris. Placerat vel sed tellus sit tortor. Pulvinar diam semper ullamcorper blandit nunc eget. Quam a sed gravida enim non mattis. <br /><br />
                 Sed commodo tempus volutpat vel sed nulla ac risus. Cras et aliquet felis scelerisque nam vitae. Fusce mauris nibh luctus sem faucibus nisi pharetra felis facilisis. At laoreet augue magna sit viverra sagittis. Facilisi dictum ac cum nibh dui urna fusce porta amet. Curabitur nunc ac varius luctus diam eget ut. Consequat interdum non praesent semper congue nec amet cursus. Enim elit eu tellus est elit mauris orci ultrices. <br /><br />
                 Ullamcorper vulputate duis non viverra semper cursus fermentum quis aliquet. Auctor cras hac ipsum nisi. Etiam nec non id integer congue purus sem. Euismod a ac justo libero lacus. Viverra nunc pretium pretium est vitae vestibulum viverra. Dignissim aliquet duis sit tincidunt nullam montes est tellus egestas. Ornare amet mauris sapien dignissim convallis eu tempor gravida. <br /><br />
                 Sed commodo tempus volutpat vel sed nulla ac risus. Cras et aliquet felis scelerisque nam vitae. Fusce mauris nibh luctus sem faucibus nisi pharetra felis facilisis. At laoreet augue magna sit viverra sagittis. Facilisi dictum ac cum nibh dui urna fusce porta amet. Curabitur nunc ac varius luctus diam eget ut. Consequat interdum non praesent semper congue nec amet cursus. Enim elit eu tellus est elit mauris orci ultrices.
                </h4>
                <h5 className="jsp-ent">Sed commodo volutpat</h5>
                <div id="rectangle"></div>
                <h6 className="suit-jsp-ent">Sit amet euismod tortor a sapien. Vitae nulla eros blandit sit accumsan ornare tellus tellus. Erat amet id risus sed. Magna lacus cras enim ultricies arcu amet ultrices. Egestas malesuada bibendum pulvinar sed sodales at bibendum.
                Leo consequat augue maecenas ac et volutpat in etiam. A ac gravida egestas lectus cras vel. Laoreet aliquet mattis etiam morbi mauris. Placerat vel sed tellus sit tortor. Pulvinar diam semper ullamcorper blandit nunc eget. <br /><br />
                Quam a sed gravida enim non mattis. <br /><br />
                Sed commodo tempus volutpat vel sed nulla ac risus. <br />
                Cras et aliquet felis scelerisque nam vitae. Fusce mauris nibh luctus sem faucibus nisi pharetra felis facilisis. <br /><br />
                At laoreet augue magna sit viverra sagittis. Facilisi dictum ac cum nibh dui urna fusce porta amet. Curabitur nunc ac varius luctus diam eget ut. Consequat interdum non praesent semper congue nec amet cursus. Enim elit eu tellus est elit mauris orci ultrices. <br /><br />
                Ullamcorper vulputate duis non viverra semper cursus fermentum quis aliquet. Auctor cras hac ipsum nisi. Etiam nec non id integer congue purus sem. <br /><br />
                Euismod a ac justo libero lacus. Viverra nunc pretium pretium est vitae vestibulum viverra. Dignissim aliquet duis sit tincidunt nullam montes est tellus egestas. Ornare amet mauris sapien dignissim convallis eu tempor gravida. <br /><br />
                Sed commodo tempus volutpat vel sed nulla ac risus. Cras et aliquet felis scelerisque nam vitae. Fusce mauris nibh luctus sem faucibus nisi pharetra felis facilisis. <br /><br />
                At laoreet augue magna sit viverra sagittis. Facilisi dictum ac cum nibh dui urna fusce porta amet. Curabitur nunc ac varius luctus diam eget ut. Consequat interdum non praesent semper congue nec amet cursus. Enim elit eu tellus est elit mauris orci ultrices.
                </h6>
                <br /><br /><br /><br /><br /><br /><br /><br />
                <h1 className="categories-ent">Dans la même catégorie…</h1>
               
                <div className="slide-ent">
                <SimpleSlide/>
                </div>
            </div>
        </body>
     </div>
    );
}
