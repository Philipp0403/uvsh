<template>
  <div id="container">
    <!-- <h1>Information</h1> -->
    <div v-if="uzl & !euf & !cau">
      <!-- <h1> Universität zu Lübeck (UzL)</h1> -->
      <img
        src="../assets/UzlLogo.png"
        alt="Logo Universität zu Lübeck"
        width="300"
        class="d-inline-block align-items-center"
      />
      <ul>
        <li><b>Kurzform:</b> UzL</li>
        <li><b>Stadt:</b> Lübeck</li>
        <li><b>Gründung:</b> 1964</li>
        <li><b>Motto:</b> "Im Fokus das Leben"</li>
        <li>
          <b>Webseite:</b
          ><a
            href="https://www.uni-luebeck.de/universitaet/universitaet.html"
            target="_blank"
          >
            Uni-Luebeck.de</a
          >
        </li>
        <li><b>Studierendenzahl:</b> 4.771 (Stand 2017)</li>
        <li><b>Ausgaben pro Studi:</b> ca. 12.800€</li>
        <li>
          <b>Forschungszentren:</b>
          <ul>
            <li>
              <a
                href="https://www.uni-luebeck.de/forschung/forschungsprofil/forschungsschwerpunkte/infektion-und-entzuendung-ziel.html"
                target="_blank"
              >
                Infektion und Entzündung mit dem Zentrum für Infektion und
                Entzündung Lübeck (ZIEL)</a
              >
            </li>
            <li>
              <a
                href="https://www.uni-luebeck.de/forschung/forschungsprofil/forschungsschwerpunkte/gehirn-hormone-verhalten-cbbm.html"
                target="_blank"
              >
                Gehirn, Hormone, Verhalten mit dem Center for Brain, Behavior
                and Metabolism (CBBM)</a
              >
            </li>
            <li>
              <a
                href="https://www.uni-luebeck.de/forschung/forschungsprofil/forschungsschwerpunkte/biomedizintechnik.html"
                target="_blank"
              >
                Biomedizintechnik mit dem Center for Imaging Sciences (CIS)</a
              >
            </li>
          </ul>
        </li>
        <li>
          <b>Fun Facts:</b>
          <ul>
            <li>Die UzL ist seit 2015 eine Stiftungsuniversität</li>
            <li>Die UzL war ursprünglich der MINT Sektor der CAU</li>
          </ul>
        </li>
      </ul>
    </div>

    <div v-if="!uzl & euf & !cau">
      <!-- <h1> Europa-Universität Flensburg (EUF)</h1> -->
      <img
        src="../assets/EufLogo.png"
        alt="Logo Europa-Universität Flensburg"
        width="300"
        class="d-inline-block align-items-center"
      />
      <ul>
        <li><b>Kurzform:</b> EUF</li>
        <li><b>Stadt:</b> Flensburg</li>
        <li><b>Gründung:</b> 1994</li>
        <li><b>Motto:</b> "In Vielfalt vereint"</li>
        <li>
          <b>Webseite:</b
          ><a href="https://www.uni-flensburg.de" target="_blank">
            Uni-Flensburg.de</a
          >
        </li>
        <li><b>Studierendenzahl:</b> 5.711 (Stand 2017)</li>
        <li><b>Ausgaben pro Studi:</b> ca. 9.000€</li>
        <li>
          <b>Forschungszentren:</b>

          <ul>
            <li>
              <a href="https://www.uni-flensburg.de/zebuss" target="_blank">
                Zentrum für Bildungs-, Unterrichts-, Schul- und
                Sozialisationsforschung (ZeBUSS)</a
              >
            </li>
            <li>
              <a href="https://www.uni-flensburg.de/ices" target="_blank">
                Interdisciplinary Centre for European Studies (ICES)</a
              >
            </li>
          </ul>
        </li>
        <li>
          <b>Fun Facts:</b>
          <ul>
            <li>
              Auf dem Campus gibt es wildwachsende Erdbeeren, die von Studis
              gegessen werden dürfen.
            </li>
            <li>Die EUF ist die nördlichste Uni Deutschlands.</li>
            <li>
              Die ZHB der EUF ist dem Führerhaus eines Schiffes nachempfunden.
            </li>
            <li>
              Auf dem Campus befindet sich die Heimhalle der
              Handball-Bundesligamannschaft SG Flensburg-Handewitt.
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div v-if="!uzl & !euf & cau">
      <!-- <h1> Christian-Albrecht-Universität zu Kiel (CAU)</h1> -->
      <img
        src="../assets/CauLogo.png"
        alt="Logo Christan-Albrecht Universität"
        width="300"
        class="d-inline-block align-items-center"
      />
      <ul>
        <li><b>Kurzform:</b> CAU</li>
        <li><b>Stadt:</b> Kiel</li>
        <li><b>Gründung:</b> 1665</li>
        <li><b>Motto:</b> "Frieden ist das höchste der Güter"</li>
        <li>
          <b>Webseite:</b
          ><a href="https://www.uni-kiel.de/" target="_blank"> Uni-Kiel.de</a>
        </li>
        <li><b>Studierendenzahl:</b> 26.462 (Stand 2017)</li>
        <li><b>Ausgaben pro Studi:</b> ca. 13.800€</li>
        <li>
          <b>Forschungszentren:</b>
          <ul>
            <li>
              <a
                href="https://www.uni-kiel.de/de/cluster-roots"
                target="_blank"
              >
                ROOTS – Konnektivität von Gesellschaft, Umwelt und Kultur in
                vergangenen Welten</a
              >
            </li>
            <li>
              <a href="https://www.precisionmedicine.de/de/" target="_blank">
                Precision Medicine in Chronic Inflammation (PMI)</a
              >
            </li>
          </ul>
        </li>
        <li>
          <b>Fun Facts:</b>
          <ul>
            <li>Man Kann einen Tauch-Kurs an der Uni machen</li>
            <li>Die CAU ist der größte Arbeitgeber in Kiel</li>
            <li>In den Katakomben der Uni befindet sich ein Escape Room</li>
            <li>Im botanischen Garten der Uni leben Wachteln</li>
          </ul>
        </li>
      </ul>
    </div>

    <div v-if="uzl & !euf & cau">
      <img
        src="../assets/UzlLogo.png"
        alt="Logo Universität zu Lübeck"
        width="300"
        class="d-inline-block align-items-center"
      />
      <ul>
        <li><b>Kurzform:</b> UzL</li>
        <li><b>Gründung:</b> 1964</li>
        <li><b>Studierendenzahl:</b> 4.771(Stand 2017)</li>
        <li><b>Ausgaben pro Studi:</b> ca. 12.800€</li>
      </ul>
      <img
        src="../assets/CauLogo.png"
        alt="Logo Christan-Albrecht Universität"
        width="300"
        class="d-inline-block align-items-center"
      />
      <ul>
        <li><b>Kurzform:</b> CAU</li>
        <li><b>Gründung:</b> 1665</li>
        <li><b>Studierendenzahl:</b> 26.462 (Stand 2017)</li>
        <li><b>Ausgaben pro Studi:</b> ca. 13.800€</li>
      </ul>
    </div>

    <div v-if="!uzl & euf & cau">
      <img
        src="../assets/EufLogo.png"
        alt="Logo Europa-Universität Flensburg"
        width="300"
        class="d-inline-block align-items-center"
      />
      <ul>
        <li><b>Kurzform:</b> EUF</li>
        <li><b>Gründung:</b> 1994</li>
        <li><b>Studierendenzahl:</b> 5.711 (Stand 2017)</li>
        <li><b>Ausgaben pro Studi:</b> ca. 9.000€</li>
      </ul>

      <img
        src="../assets/CauLogo.png"
        alt="Logo Christan-Albrecht Universität"
        width="300"
        class="d-inline-block align-items-center"
      />
      <ul>
        <li><b>Kurzform:</b> CAU</li>
        <li><b>Gründung:</b> 1665</li>
        <li><b>Studierendenzahl:</b> 26.462 (Stand 2017)</li>
        <li><b>Ausgaben pro Studi:</b> ca. 13.800€</li>
      </ul>
    </div>

    <div v-if="uzl & euf & !cau">
      <img
        src="../assets/UzlLogo.png"
        alt="Logo Universität zu Lübeck"
        width="300"
        class="d-inline-block align-items-center"
      />
      <ul>
        <li><b>Kurzform:</b> UzL</li>
        <li><b>Gründung:</b> 1964</li>
        <li><b>Studierendenzahl:</b> 4.771(Stand 2017)</li>
        <li><b>Ausgaben pro Studi:</b> ca. 12.800</li>
      </ul>

      <img
        src="../assets/EufLogo.png"
        alt="Logo Europa-Universität Flensburg"
        width="300"
        class="d-inline-block align-items-center"
      />
      <ul>
        <li><b>Kurzform:</b> EUF</li>
        <li><b>Gründung:</b> 1994</li>
        <li><b>Studierendenzahl:</b> 5.711 (Stand 2017)</li>
        <li><b>Ausgaben pro Studi:</b> ca. 9.000€</li>
      </ul>
    </div>

    <div v-if="uzl & euf & cau">
      <img
        src="../assets/UzlLogo.png"
        alt="Logo Universität zu Lübeck"
        width="300"
        class="d-inline-block align-items-center"
      />
      <ul>
        <li><b>Kurzform:</b> UzL</li>
        <li><b>Gründung:</b> 1964</li>
        <li><b>Studierendenzahl:</b> 4.771 (Stand 2017)</li>
        <li><b>Ausgaben pro Studi:</b> ca. 12.800</li>
      </ul>
      <img
        src="../assets/EufLogo.png"
        alt="Logo Europa-Universität Flensburg"
        width="300"
        class="d-inline-block align-items-center"
      />
      <ul>
        <li><b>Kurzform:</b> EUF</li>
        <li><b>Gründung:</b> 1994</li>
        <li><b>Studierendenzahl:</b> 5.711 (Stand 2017)</li>
        <li><b>Ausgaben pro Studi:</b> ca. 9.000€</li>
      </ul>
      <img
        src="../assets/CauLogo.png"
        alt="Logo Christan-Albrecht Universität"
        width="300"
        class="d-inline-block align-items-center"
      />
      <ul>
        <li><b>Kurzform:</b> CAU</li>
        <li><b>Gründung:</b> 1665</li>
        <li><b>Studierendenzahl:</b> 26.462 (Stand 2017)</li>
        <li><b>Ausgaben pro Studi:</b> ca. 13.800€</li>
      </ul>
    </div>

    <div v-if="!uzl & !euf & !cau">
      <h1>Was ist ein Haushaltsplan?</h1>
      <p>
        Ein Haushaltsplan ist ein Plan, der bspw. vom Staat festlegt wird, und
        darstellt wie viel Geld ausgegeben werden darf und wofür. Der
        Haushaltsplan beinhaltet auch woher das Geld kommt, das ausgegeben wird.
        Hierbei ist wichtig, dass es über Absichten und Erwartungen, nicht aber
        über tatsächliche finanzwirtschaftliche Ergebnisse Auskunft gibt. Jede
        Gemeinde, jedes Land, der Bund und die EU stellen einen Haushaltsplan
        zusammen. Sobald ein Haushaltsplan vom Gemeinderat oder Parlament
        genehmigt wurde, wird dies auch als Haushaltsgesetz bezeichnet.
      </p>
      <p>
        Diese Webseite wurde im Rahmen des Open Data Hackathons der UzL
        entwickelt und betrachtet die öffentlich-zugänglichen Daten des
        Ministeriums für Soziales, Gesundheit, Wissenschaft und Gleichstellung,
        bzw. des Ministeriums für Bildung, Wissenschaft und Kultur. Im Fokus
        sind die jeweiligen Einzelpläne 07 & 10 der Ministerien der Jahre
        2013-2019. Diese enthalten alle Einnahmen und Ausgaben der jeweiligen
        Universitäten. Die Webseite soll dazu dienen, die Ausgaben und Einnahmen
        verschiedener Universitäten zu vergleichen und anhand einzelner
        Positionen aufzuschlüsseln. Um Daten für die Universität zu Lübeck,
        Universität Kiel oder für die Europauniversität Flensburg zu sehen,
        wählen Sie bitte das entsprechende Icon für die jeweilige Universität im
        rechten Fenster.
      </p>
      <p>
        (Bitte beachten Sie: Die Daten sind aufgrund fehlender Einträge in den
        Einzelplänen tlws. prognostiziert)
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SteckbriefComponent",
  methods: {},
  computed: {
    uzl() {
      return this.$store.state.uzl;
    },
    cau() {
      return this.$store.state.cau;
    },
    euf() {
      return this.$store.state.euf;
    },
  },
};
</script>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  background-color: #decdfa;
  width: 35%;
  padding: 2rem;
  margin: 1rem;
  border-radius: 5px;
  border: 1px solid black;
  overflow:auto;
}

.circles {
  margin: 10px;
}

p {
  margin-top: 1rem;
}
</style>
