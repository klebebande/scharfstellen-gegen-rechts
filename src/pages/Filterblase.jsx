import styles from "./Subpage.module.css";

const SubpageMamaSindWirNazis = () => {
  return (
    <div className={styles.subpageMamaSindWirNazis}>
      <div className={styles.mamaSindWirNazisContainer}>
        <p className={styles.mama}>Mama,</p>
        <p className={styles.mama}>{`sind wir `}</p>
        <p className={styles.nazis}>
          <span className={styles.nazis1}>Nazis</span>
          <span className={styles.span}>?</span>
        </p>
      </div>
      <div className={styles.linie1} />
      <div className={styles.immerWiederBehauptetContainer}>
        <p
          className={styles.immerWiederBehauptet}
        >{`Immer wieder behauptet die AfD, dass sie mit Rechtsextremen und Neonazis nichts zu tun habe. Vor Gericht versucht sie sogar zu erreichen, dass niemand sagen darf, sie sei eine rechtsextreme Partei – und nennt solche Vorwürfe „Einzelfälle“. Und Björn Höcke? Der meint, ihm passieren nur hin und wieder „Ausrutscher“. Fakt ist jedoch: Seine Worte haben System und sind Ausdruck eines geschlossenen rechtsextremen, menschenfeindlichen Weltbildes. `}</p>
      </div>
      <div className={styles.vieleAfdMitgliederNutzenContainer}>
        <p className={styles.immerWiederBehauptet}>
          Viele AfD-Mitglieder nutzen oft NS- und Neonazi-Vokabular, auch wenn
          es nicht immer auf den ersten Blick als solches erkennbar ist. Die
          Bedeutungen bleiben erhalten. Hier sind ein paar Beispiele von Worten,
          die die AfD benutzt, und was sie wirklich bedeuten:
        </p>
      </div>
      <div className={styles.schuldkultSoBezeichnetDieContainer}>
        <p className={styles.schuldkult}>
          <b> „Schuldkult“</b>
        </p>
        <p className={styles.immerWiederBehauptet}>
          So bezeichnet die AfD die deutsche Erinnerungskultur, die den
          Holocaust aufarbeiten und seinen Opfern gedenken soll. Sie und andere
          Antisemiten und Holocaustleugner finden, dass das nicht mehr nötig
          ist.
        </p>
        <p
          className={styles.schuldkult}
        >{`      stammt aus der Neonazi-Szene der Achtziger `}</p>
      </div>
      <div className={styles.remigrationSoBezeichnetDieContainer}>
        <p className={styles.schuldkult}>
          <b> „Remigration“</b>
        </p>
        <p
          className={styles.immerWiederBehauptet}
        >{`So bezeichnet die AfD ihr Ziel, dass Menschen, die oder deren Familien aus anderen Ländern stammen, Deutschland verlassen sollen. `}</p>
        <p className={styles.schuldkult}>
          {" "}
          Auch im Nationalsozialismus wurden sogenannte „Remigrationspläne“
          aufgestellt, die nichts weniger bedeuteten als die Deportation und
          Ermordnung von Millionen von Jüdinnen und Juden aus Deutschland.
        </p>
        <p className={styles.immerWiederBehauptet}>&nbsp;</p>
        <p className={styles.schuldkult}>
          <b> „Ethnopluralismus“</b>
        </p>
        <p className={styles.immerWiederBehauptet}>
          Ethnopluralisten behaupten, es gebe unveränderliche Eigenschaften von
          Menschengruppen. Je ähnlicher sich eine Gruppe ist, desto besser und
          stärker sei sie. Die AfD denkt, das ist ein Grund, warum Menschen aus
          anderen Ländern nicht hier sein sollten.
        </p>
        <p className={styles.schuldkult}>
          {" "}
          Der Begriff dient der Verschleierung von Rassismus. Er wurde in den
          Siebzigern von Henning Eichberg, einem theoretischen Vordenker der
          Neuen Rechten, eingeführt.
        </p>
        <span />
      </div>
      <div className={styles.eineKurzeBildunterschrift}>
        Eine kurze Bildunterschrift (Quelle, Datum)
      </div>
      <b className={styles.dieAfdNutzt}>
        Die AfD nutzt Worte von Nationalsozialisten und Neonazis, aber will
        partout nicht rechtsextrem sein.
      </b>
      <img className={styles.gruppe10Icon} alt="" src={ "/gruppe-10.svg"} />
      <img className={styles.gruppe11Icon} alt="" src={ "/gruppe-10.svg"} />
      <img className={styles.gruppe16Icon} alt="" src={ "/gruppe-10.svg"} />
      <div className={styles.gruppe15}>
        <div className={styles.gruppe14}>
          <b className={styles.hierWeitereThemen}>
            Hier weitere Themen abchecken
          </b>
          <img className={styles.gruppe12Icon} alt="" src={"/gruppe-12.svg"} />
        </div>
      </div>
      <img className={styles.bild2Icon} alt="" src={"/bild-2@2x.png"} />
      <img className={styles.bild1Icon} alt="" src={"/bild-1@2x.png"} />
      <div className={styles.eineKurzeBildunterschrift1}>
        Eine kurze Bildunterschrift (Quelle, Datum)
      </div>
      <img className={styles.pfad5Icon} alt="" src={"/pfad-5.svg"} />
      <img className={styles.pfad6Icon} alt="" src={"/pfad-6.svg"} />
      <img className={styles.pfad7Icon} alt="" src={"/pfad-7.svg"} />
      <img className={styles.pfad9Icon} alt="" src={"/pfad-7.svg"} />
      <img className={styles.pfad11Icon} alt="" src={"/pfad-7.svg"} />
      <img className={styles.pfad8Icon} alt="" src={"/pfad-8.svg"} />
      <img className={styles.pfad10Icon} alt="" src={"/pfad-8.svg"} />
      <img className={styles.pfad12Icon} alt="" src={"/pfad-8.svg"} />
    </div>
  );
};


export default SubpageMamaSindWirNazis;
