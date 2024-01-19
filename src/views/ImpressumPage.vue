<template>
  <div class="wrapper">
    <TopView></TopView>
    <div class="content">

      <h3>Impressum</h3>
      <h5>Vertreten durch:</h5>
      <p>Henrietta Horstmann</p>
      <p>Didem Karakoyun</p>
      <p>Akasha Kessel</p>
      <p>Philipp Uesbeck</p>
      <h5>Umsatzsteuer-ID:</h5>
      <p>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: Musterustid.</p>
      <h5>Wirtschafts-ID:</h5>
      <p>Musterwirtschaftsid</p>
      <h5>Aufsichtsbehörde:</h5>
      <p>Musteraufsicht Musterstadt</p>
      <h5>Haftungsausschluss:</h5>
      <h5>Haftung für Inhalte</h5>
      <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
        Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, 
        die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden 
        wir diese Inhalte umgehend entfernen.
      </p>
      <h5>Urheberrecht</h5>
      <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
        der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur 
        für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. 
        Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. 
        Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
      </p>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import TopView from '@/components/TopView.vue'
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  components: {
    TopView,
    FooterComponent
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  /* padding: 1rem; */
}
.content {
  display: flex;
  flex-direction: column;
  height: 80%;
}
</style>
