const rawQuestions = [
  {
    id: "eu-01",
    translations: {
      sr: { language: "sr", continent: "Evropa", question: "Koja evropska država ima najviše stanovnika?", correct: "Rusija", wrong: ["Nemačka", "Francuska", "Turska", "Italija", "Španija"] },
      en: { language: "en", continent: "Europe", question: "Koja evropska država ima najviše stanovnika?", correct: "Rusija", wrong: ["Nemačka", "Francuska", "Turska", "Italija", "Španija"] },
      de: { language: "de", continent: "Europa", question: "Koja evropska država ima najviše stanovnika?", correct: "Rusija", wrong: ["Nemačka", "Francuska", "Turska", "Italija", "Španija"] },
      ru: { language: "ru", continent: "Европа", question: "Koja evropska država ima najviše stanovnika?", correct: "Rusija", wrong: ["Nemačka", "Francuska", "Turska", "Italija", "Španija"] },
      zh: { language: "zh", continent: "欧洲", question: "Koja evropska država ima najviše stanovnika?", correct: "Rusija", wrong: ["Nemačka", "Francuska", "Turska", "Italija", "Španija"] },
      et: { language: "et", continent: "Euroopa", question: "Koja evropska država ima najviše stanovnika?", correct: "Rusija", wrong: ["Nemačka", "Francuska", "Turska", "Italija", "Španija"] }
    }
  },
  {
    id: "eu-02",
    translations: {
      sr: { language: "sr", continent: "Evropa", question: "Koji je glavni grad Španije?", correct: "Madrid", wrong: ["Barselona", "Valensija", "Lisabon", "Rim", "Pariz"] },
      en: { language: "en", continent: "Europe", question: "Koji je glavni grad Španije?", correct: "Madrid", wrong: ["Barselona", "Valensija", "Lisabon", "Rim", "Pariz"] },
      de: { language: "de", continent: "Europa", question: "Koji je glavni grad Španije?", correct: "Madrid", wrong: ["Barselona", "Valensija", "Lisabon", "Rim", "Pariz"] },
      ru: { language: "ru", continent: "Европа", question: "Koji je glavni grad Španije?", correct: "Madrid", wrong: ["Barselona", "Valensija", "Lisabon", "Rim", "Pariz"] },
      zh: { language: "zh", continent: "欧洲", question: "Koji je glavni grad Španije?", correct: "Madrid", wrong: ["Barselona", "Valensija", "Lisabon", "Rim", "Pariz"] },
      et: { language: "et", continent: "Euroopa", question: "Koji je glavni grad Španije?", correct: "Madrid", wrong: ["Barselona", "Valensija", "Lisabon", "Rim", "Pariz"] }
    }
  },
  {
    id: "eu-03",
    translations: {
      sr: { language: "sr", continent: "Evropa", question: "Koje je najveće jezero u Evropi?", correct: "Ladoško jezero", wrong: ["OnjeSko jezero", "Vänern", "Ženevsko jezero", "Balaton", "Bodensko jezero"] },
      en: { language: "en", continent: "Europe", question: "Koje je najveće jezero u Evropi?", correct: "Ladoško jezero", wrong: ["OnjeSko jezero", "Vänern", "Ženevsko jezero", "Balaton", "Bodensko jezero"] },
      de: { language: "de", continent: "Europa", question: "Koje je najveće jezero u Evropi?", correct: "Ladoško jezero", wrong: ["OnjeSko jezero", "Vänern", "Ženevsko jezero", "Balaton", "Bodensko jezero"] },
      ru: { language: "ru", continent: "Европа", question: "Koje je najveće jezero u Evropi?", correct: "Ladoško jezero", wrong: ["OnjeSko jezero", "Vänern", "Ženevsko jezero", "Balaton", "Bodensko jezero"] },
      zh: { language: "zh", continent: "欧洲", question: "Koje je najveće jezero u Evropi?", correct: "Ladoško jezero", wrong: ["OnjeSko jezero", "Vänern", "Ženevsko jezero", "Balaton", "Bodensko jezero"] },
      et: { language: "et", continent: "Euroopa", question: "Koje je najveće jezero u Evropi?", correct: "Ladoško jezero", wrong: ["OnjeSko jezero", "Vänern", "Ženevsko jezero", "Balaton", "Bodensko jezero"] }
    }
  },
  {
    id: "eu-04",
    translations: {
      sr: { language: "sr", continent: "Evropa", question: "Koji grad predstavlja sedište Evropske unije?", correct: "Brisel", wrong: ["Strazbur", "Luksemburg", "Frankfurt", "Amsterdam", "Beč"] },
      en: { language: "en", continent: "Europe", question: "Koji grad predstavlja sedište Evropske unije?", correct: "Brisel", wrong: ["Strazbur", "Luksemburg", "Frankfurt", "Amsterdam", "Beč"] },
      de: { language: "de", continent: "Europa", question: "Koji grad predstavlja sedište Evropske unije?", correct: "Brisel", wrong: ["Strazbur", "Luksemburg", "Frankfurt", "Amsterdam", "Beč"] },
      ru: { language: "ru", continent: "Европа", question: "Koji grad predstavlja sedište Evropske unije?", correct: "Brisel", wrong: ["Strazbur", "Luksemburg", "Frankfurt", "Amsterdam", "Beč"] },
      zh: { language: "zh", continent: "欧洲", question: "Koji grad predstavlja sedište Evropske unije?", correct: "Brisel", wrong: ["Strazbur", "Luksemburg", "Frankfurt", "Amsterdam", "Beč"] },
      et: { language: "et", continent: "Euroopa", question: "Koji grad predstavlja sedište Evropske unije?", correct: "Brisel", wrong: ["Strazbur", "Luksemburg", "Frankfurt", "Amsterdam", "Beč"] }
    }
  },
  {
    id: "eu-05",
    translations: {
      sr: { language: "sr", continent: "Evropa", question: "Kako se zove najveći aktivni vulkan u Evropi?", correct: "Etna", wrong: ["Vezuv", "Stromboli", "Hecla", "Santorini", "Piton de la Furnez"] },
      en: { language: "en", continent: "Europe", question: "Kako se zove najveći aktivni vulkan u Evropi?", correct: "Etna", wrong: ["Vezuv", "Stromboli", "Hecla", "Santorini", "Piton de la Furnez"] },
      de: { language: "de", continent: "Europa", question: "Kako se zove najveći aktivni vulkan u Evropi?", correct: "Etna", wrong: ["Vezuv", "Stromboli", "Hecla", "Santorini", "Piton de la Furnez"] },
      ru: { language: "ru", continent: "Европа", question: "Kako se zove najveći aktivni vulkan u Evropi?", correct: "Etna", wrong: ["Vezuv", "Stromboli", "Hecla", "Santorini", "Piton de la Furnez"] },
      zh: { language: "zh", continent: "欧洲", question: "Kako se zove najveći aktivni vulkan u Evropi?", correct: "Etna", wrong: ["Vezuv", "Stromboli", "Hecla", "Santorini", "Piton de la Furnez"] },
      et: { language: "et", continent: "Euroopa", question: "Kako se zove najveći aktivni vulkan u Evropi?", correct: "Etna", wrong: ["Vezuv", "Stromboli", "Hecla", "Santorini", "Piton de la Furnez"] }
    }
  },
  {
    id: "eu-06",
    translations: {
      sr: { language: "sr", continent: "Evropa", question: "Koja od ovih država ima himnu bez teksta?", correct: "Španija", wrong: ["Nemačka", "Francuska", "Italija", "Grčka", "Portugal"] },
      en: { language: "en", continent: "Europe", question: "Koja od ovih država ima himnu bez teksta?", correct: "Španija", wrong: ["Nemačka", "Francuska", "Italija", "Grčka", "Portugal"] },
      de: { language: "de", continent: "Europa", question: "Koja od ovih država ima himnu bez teksta?", correct: "Španija", wrong: ["Nemačka", "Francuska", "Italija", "Grčka", "Portugal"] },
      ru: { language: "ru", continent: "Европа", question: "Koja od ovih država ima himnu bez teksta?", correct: "Španija", wrong: ["Nemačka", "Francuska", "Italija", "Grčka", "Portugal"] },
      zh: { language: "zh", continent: "欧洲", question: "Koja od ovih država ima himnu bez teksta?", correct: "Španija", wrong: ["Nemačka", "Francuska", "Italija", "Grčka", "Portugal"] },
      et: { language: "et", continent: "Euroopa", question: "Koja od ovih država ima himnu bez teksta?", correct: "Španija", wrong: ["Nemačka", "Francuska", "Italija", "Grčka", "Portugal"] }
    }
  },
  {
    id: "eu-07",
    translations: {
      sr: { language: "sr", continent: "Evropa", question: "Koja evropska država ima oblik čizme?", correct: "Italija", wrong: ["Grčka", "Portugal", "Španija", "Hrvatska", "Albanija"] },
      en: { language: "en", continent: "Europe", question: "Koja evropska država ima oblik čizme?", correct: "Italija", wrong: ["Grčka", "Portugal", "Španija", "Hrvatska", "Albanija"] },
      de: { language: "de", continent: "Europa", question: "Koja evropska država ima oblik čizme?", correct: "Italija", wrong: ["Grčka", "Portugal", "Španija", "Hrvatska", "Albanija"] },
      ru: { language: "ru", continent: "Европа", question: "Koja evropska država ima oblik čizme?", correct: "Italija", wrong: ["Grčka", "Portugal", "Španija", "Hrvatska", "Albanija"] },
      zh: { language: "zh", continent: "欧洲", question: "Koja evropska država ima oblik čizme?", correct: "Italija", wrong: ["Grčka", "Portugal", "Španija", "Hrvatska", "Albanija"] },
      et: { language: "et", continent: "Euroopa", question: "Koja evropska država ima oblik čizme?", correct: "Italija", wrong: ["Grčka", "Portugal", "Španija", "Hrvatska", "Albanija"] }
    }
  },
  {
    id: "eu-08",
    translations: {
      sr: { language: "sr", continent: "Evropa", question: "U kojoj evropskoj državi nema komaraca?", correct: "Island", wrong: ["Norveška", "Finska", "Danska", "Škotska", "Irska"] },
      en: { language: "en", continent: "Europe", question: "U kojoj evropskoj državi nema komaraca?", correct: "Island", wrong: ["Norveška", "Finska", "Danska", "Škotska", "Irska"] },
      de: { language: "de", continent: "Europa", question: "U kojoj evropskoj državi nema komaraca?", correct: "Island", wrong: ["Norveška", "Finska", "Danska", "Škotska", "Irska"] },
      ru: { language: "ru", continent: "Европа", question: "U kojoj evropskoj državi nema komaraca?", correct: "Island", wrong: ["Norveška", "Finska", "Danska", "Škotska", "Irska"] },
      zh: { language: "zh", continent: "欧洲", question: "U kojoj evropskoj državi nema komaraca?", correct: "Island", wrong: ["Norveška", "Finska", "Danska", "Škotska", "Irska"] },
      et: { language: "et", continent: "Euroopa", question: "U kojoj evropskoj državi nema komaraca?", correct: "Island", wrong: ["Norveška", "Finska", "Danska", "Škotska", "Irska"] }
    }
  },
  {
    id: "eu-09",
    translations: {
      sr: { language: "sr", continent: "Evropa", question: "Koje su tri države Beneluksa?", correct: "Belgija, Holandija, Luksemburg", wrong: ["Belgija", "Danska", "Holandija", "Holandija", "Nemačka", "Belgija", "Luksemburg", "Francuska", "Belgija", "Danska", "Norveška", "Švedska", "Austrija", "Švajcarska", "Luksemburg"] },
      en: { language: "en", continent: "Europe", question: "Koje su tri države Beneluksa?", correct: "Belgija, Holandija, Luksemburg", wrong: ["Belgija", "Danska", "Holandija", "Holandija", "Nemačka", "Belgija", "Luksemburg", "Francuska", "Belgija", "Danska", "Norveška", "Švedska", "Austrija", "Švajcarska", "Luksemburg"] },
      de: { language: "de", continent: "Europa", question: "Koje su tri države Beneluksa?", correct: "Belgija, Holandija, Luksemburg", wrong: ["Belgija", "Danska", "Holandija", "Holandija", "Nemačka", "Belgija", "Luksemburg", "Francuska", "Belgija", "Danska", "Norveška", "Švedska", "Austrija", "Švajcarska", "Luksemburg"] },
      ru: { language: "ru", continent: "Европа", question: "Koje su tri države Beneluksa?", correct: "Belgija, Holandija, Luksemburg", wrong: ["Belgija", "Danska", "Holandija", "Holandija", "Nemačka", "Belgija", "Luksemburg", "Francuska", "Belgija", "Danska", "Norveška", "Švedska", "Austrija", "Švajcarska", "Luksemburg"] },
      zh: { language: "zh", continent: "欧洲", question: "Koje su tri države Beneluksa?", correct: "Belgija, Holandija, Luksemburg", wrong: ["Belgija", "Danska", "Holandija", "Holandija", "Nemačka", "Belgija", "Luksemburg", "Francuska", "Belgija", "Danska", "Norveška", "Švedska", "Austrija", "Švajcarska", "Luksemburg"] },
      et: { language: "et", continent: "Euroopa", question: "Koje su tri države Beneluksa?", correct: "Belgija, Holandija, Luksemburg", wrong: ["Belgija", "Danska", "Holandija", "Holandija", "Nemačka", "Belgija", "Luksemburg", "Francuska", "Belgija", "Danska", "Norveška", "Švedska", "Austrija", "Švajcarska", "Luksemburg"] }
    }
  },
  {
    id: "eu-10",
    translations: {
      sr: { language: "sr", continent: "Evropa", question: "Kako se zove najveća planina u Evropi?", correct: "Mont Blan", wrong: ["Elbrus", "Matterhorn", "Monvizo", "Gran Paradiso", "Jungfrau"] },
      en: { language: "en", continent: "Europe", question: "Kako se zove najveća planina u Evropi?", correct: "Mont Blan", wrong: ["Elbrus", "Matterhorn", "Monvizo", "Gran Paradiso", "Jungfrau"] },
      de: { language: "de", continent: "Europa", question: "Kako se zove najveća planina u Evropi?", correct: "Mont Blan", wrong: ["Elbrus", "Matterhorn", "Monvizo", "Gran Paradiso", "Jungfrau"] },
      ru: { language: "ru", continent: "Европа", question: "Kako se zove najveća planina u Evropi?", correct: "Mont Blan", wrong: ["Elbrus", "Matterhorn", "Monvizo", "Gran Paradiso", "Jungfrau"] },
      zh: { language: "zh", continent: "欧洲", question: "Kako se zove najveća planina u Evropi?", correct: "Mont Blan", wrong: ["Elbrus", "Matterhorn", "Monvizo", "Gran Paradiso", "Jungfrau"] },
      et: { language: "et", continent: "Euroopa", question: "Kako se zove najveća planina u Evropi?", correct: "Mont Blan", wrong: ["Elbrus", "Matterhorn", "Monvizo", "Gran Paradiso", "Jungfrau"] }
    }
  },
  {
    id: "eu-11",
    translations: {
      sr: { language: "sr", continent: "Evropa", question: "U kom evropskom gradu se održava čuveni Oktoberfest?", correct: "Minhen", wrong: ["Beč", "Prag", "Berlin", "Hamburg", "Štutgart"] },
      en: { language: "en", continent: "Europe", question: "U kom evropskom gradu se održava čuveni Oktoberfest?", correct: "Minhen", wrong: ["Beč", "Prag", "Berlin", "Hamburg", "Štutgart"] },
      de: { language: "de", continent: "Europa", question: "U kom evropskom gradu se održava čuveni Oktoberfest?", correct: "Minhen", wrong: ["Beč", "Prag", "Berlin", "Hamburg", "Štutgart"] },
      ru: { language: "ru", continent: "Европа", question: "U kom evropskom gradu se održava čuveni Oktoberfest?", correct: "Minhen", wrong: ["Beč", "Prag", "Berlin", "Hamburg", "Štutgart"] },
      zh: { language: "zh", continent: "欧洲", question: "U kom evropskom gradu se održava čuveni Oktoberfest?", correct: "Minhen", wrong: ["Beč", "Prag", "Berlin", "Hamburg", "Štutgart"] },
      et: { language: "et", continent: "Euroopa", question: "U kom evropskom gradu se održava čuveni Oktoberfest?", correct: "Minhen", wrong: ["Beč", "Prag", "Berlin", "Hamburg", "Štutgart"] }
    }
  },
  {
    id: "eu-12",
    translations: {
      sr: { language: "sr", continent: "Evropa", question: "Kako se zove prašuma u Bosni i Hercegovini poznata kao 'pluća Evrope'?", correct: "Perućica", wrong: ["Šumava", "Białowieża", "Dinaridi", "Tara", "Sutjeska"] },
      en: { language: "en", continent: "Europe", question: "Kako se zove prašuma u Bosni i Hercegovini poznata kao 'pluća Evrope'?", correct: "Perućica", wrong: ["Šumava", "Białowieża", "Dinaridi", "Tara", "Sutjeska"] },
      de: { language: "de", continent: "Europa", question: "Kako se zove prašuma u Bosni i Hercegovini poznata kao 'pluća Evrope'?", correct: "Perućica", wrong: ["Šumava", "Białowieża", "Dinaridi", "Tara", "Sutjeska"] },
      ru: { language: "ru", continent: "Европа", question: "Kako se zove prašuma u Bosni i Hercegovini poznata kao 'pluća Evrope'?", correct: "Perućica", wrong: ["Šumava", "Białowieża", "Dinaridi", "Tara", "Sutjeska"] },
      zh: { language: "zh", continent: "欧洲", question: "Kako se zove prašuma u Bosni i Hercegovini poznata kao 'pluća Evrope'?", correct: "Perućica", wrong: ["Šumava", "Białowieża", "Dinaridi", "Tara", "Sutjeska"] },
      et: { language: "et", continent: "Euroopa", question: "Kako se zove prašuma u Bosni i Hercegovini poznata kao 'pluća Evrope'?", correct: "Perućica", wrong: ["Šumava", "Białowieża", "Dinaridi", "Tara", "Sutjeska"] }
    }
  },
  {
    id: "eu-13",
    translations: {
      sr: { language: "sr", continent: "Evropa", question: "Koja je najveća država u Evropi?", correct: "Rusija", wrong: ["Kazahstan", "Ukrajna", "Francuska", "Španija", "Švedska"] },
      en: { language: "en", continent: "Europe", question: "Koja je najveća država u Evropi?", correct: "Rusija", wrong: ["Kazahstan", "Ukrajna", "Francuska", "Španija", "Švedska"] },
      de: { language: "de", continent: "Europa", question: "Koja je najveća država u Evropi?", correct: "Rusija", wrong: ["Kazahstan", "Ukrajna", "Francuska", "Španija", "Švedska"] },
      ru: { language: "ru", continent: "Европа", question: "Koja je najveća država u Evropi?", correct: "Rusija", wrong: ["Kazahstan", "Ukrajna", "Francuska", "Španija", "Švedska"] },
      zh: { language: "zh", continent: "欧洲", question: "Koja je najveća država u Evropi?", correct: "Rusija", wrong: ["Kazahstan", "Ukrajna", "Francuska", "Španija", "Švedska"] },
      et: { language: "et", continent: "Euroopa", question: "Koja je najveća država u Evropi?", correct: "Rusija", wrong: ["Kazahstan", "Ukrajna", "Francuska", "Španija", "Švedska"] }
    }
  },
  {
    id: "eu-14",
    translations: {
      sr: { language: "sr", continent: "Evropa", question: "Koju evropsku državu nazivamo 'Zemlja hiljadu jezera'?", correct: "Finska", wrong: ["Norveška", "Švedska", "Kanada", "Island", "Škotska"] },
      en: { language: "en", continent: "Europe", question: "Koju evropsku državu nazivamo 'Zemlja hiljadu jezera'?", correct: "Finska", wrong: ["Norveška", "Švedska", "Kanada", "Island", "Škotska"] },
      de: { language: "de", continent: "Europa", question: "Koju evropsku državu nazivamo 'Zemlja hiljadu jezera'?", correct: "Finska", wrong: ["Norveška", "Švedska", "Kanada", "Island", "Škotska"] },
      ru: { language: "ru", continent: "Европа", question: "Koju evropsku državu nazivamo 'Zemlja hiljadu jezera'?", correct: "Finska", wrong: ["Norveška", "Švedska", "Kanada", "Island", "Škotska"] },
      zh: { language: "zh", continent: "欧洲", question: "Koju evropsku državu nazivamo 'Zemlja hiljadu jezera'?", correct: "Finska", wrong: ["Norveška", "Švedska", "Kanada", "Island", "Škotska"] },
      et: { language: "et", continent: "Euroopa", question: "Koju evropsku državu nazivamo 'Zemlja hiljadu jezera'?", correct: "Finska", wrong: ["Norveška", "Švedska", "Kanada", "Island", "Škotska"] }
    }
  },
  {
    id: "eu-15",
    translations: {
      sr: { language: "sr", continent: "Evropa", question: "U kom poznatom francuskom muzeju se nalazi čuvena Mona Liza?", correct: "Luvr", wrong: ["Versaj", "Musée d'Orsay", "Pompidu", "Rodin", "Pikasov muzej"] },
      en: { language: "en", continent: "Europe", question: "U kom poznatom francuskom muzeju se nalazi čuvena Mona Liza?", correct: "Luvr", wrong: ["Versaj", "Musée d'Orsay", "Pompidu", "Rodin", "Pikasov muzej"] },
      de: { language: "de", continent: "Europa", question: "U kom poznatom francuskom muzeju se nalazi čuvena Mona Liza?", correct: "Luvr", wrong: ["Versaj", "Musée d'Orsay", "Pompidu", "Rodin", "Pikasov muzej"] },
      ru: { language: "ru", continent: "Европа", question: "U kom poznatom francuskom muzeju se nalazi čuvena Mona Liza?", correct: "Luvr", wrong: ["Versaj", "Musée d'Orsay", "Pompidu", "Rodin", "Pikasov muzej"] },
      zh: { language: "zh", continent: "欧洲", question: "U kom poznatom francuskom muzeju se nalazi čuvena Mona Liza?", correct: "Luvr", wrong: ["Versaj", "Musée d'Orsay", "Pompidu", "Rodin", "Pikasov muzej"] },
      et: { language: "et", continent: "Euroopa", question: "U kom poznatom francuskom muzeju se nalazi čuvena Mona Liza?", correct: "Luvr", wrong: ["Versaj", "Musée d'Orsay", "Pompidu", "Rodin", "Pikasov muzej"] }
    }
  },
  {
    id: "eu-16",
    translations: {
      sr: { language: "sr", continent: "Evropa", question: "Koja je najduža reka u Evropi?", correct: "Volga", wrong: ["Rej n", "Dunav", "Temza", "Sena", "Loara"] },
      en: { language: "en", continent: "Europe", question: "Koja je najduža reka u Evropi?", correct: "Volga", wrong: ["Rej n", "Dunav", "Temza", "Sena", "Loara"] },
      de: { language: "de", continent: "Europa", question: "Koja je najduža reka u Evropi?", correct: "Volga", wrong: ["Rej n", "Dunav", "Temza", "Sena", "Loara"] },
      ru: { language: "ru", continent: "Европа", question: "Koja je najduža reka u Evropi?", correct: "Volga", wrong: ["Rej n", "Dunav", "Temza", "Sena", "Loara"] },
      zh: { language: "zh", continent: "欧洲", question: "Koja je najduža reka u Evropi?", correct: "Volga", wrong: ["Rej n", "Dunav", "Temza", "Sena", "Loara"] },
      et: { language: "et", continent: "Euroopa", question: "Koja je najduža reka u Evropi?", correct: "Volga", wrong: ["Rej n", "Dunav", "Temza", "Sena", "Loara"] }
    }
  },
  {
    id: "eu-17",
    translations: {
      sr: { language: "sr", continent: "Evropa", question: "Koje je najveće poluostrvo Evrope?", correct: "Skandinavsko poluostrvo", wrong: ["Iberijsko poluostrvo", "Apeninsko poluostrvo", "Balkansko poluostrvo", "Jutlandija", "Krimsko poluostrvo"] },
      en: { language: "en", continent: "Europe", question: "Koje je najveće poluostrvo Evrope?", correct: "Skandinavsko poluostrvo", wrong: ["Iberijsko poluostrvo", "Apeninsko poluostrvo", "Balkansko poluostrvo", "Jutlandija", "Krimsko poluostrvo"] },
      de: { language: "de", continent: "Europa", question: "Koje je najveće poluostrvo Evrope?", correct: "Skandinavsko poluostrvo", wrong: ["Iberijsko poluostrvo", "Apeninsko poluostrvo", "Balkansko poluostrvo", "Jutlandija", "Krimsko poluostrvo"] },
      ru: { language: "ru", continent: "Европа", question: "Koje je najveće poluostrvo Evrope?", correct: "Skandinavsko poluostrvo", wrong: ["Iberijsko poluostrvo", "Apeninsko poluostrvo", "Balkansko poluostrvo", "Jutlandija", "Krimsko poluostrvo"] },
      zh: { language: "zh", continent: "欧洲", question: "Koje je najveće poluostrvo Evrope?", correct: "Skandinavsko poluostrvo", wrong: ["Iberijsko poluostrvo", "Apeninsko poluostrvo", "Balkansko poluostrvo", "Jutlandija", "Krimsko poluostrvo"] },
      et: { language: "et", continent: "Euroopa", question: "Koje je najveće poluostrvo Evrope?", correct: "Skandinavsko poluostrvo", wrong: ["Iberijsko poluostrvo", "Apeninsko poluostrvo", "Balkansko poluostrvo", "Jutlandija", "Krimsko poluostrvo"] }
    }
  },
  {
    id: "eu-18",
    translations: {
      sr: { language: "sr", continent: "Evropa", question: "Koliko se država nalazi u Evropi?", correct: "44", wrong: ["39", "47", "51", "36", "42"] },
      en: { language: "en", continent: "Europe", question: "Koliko se država nalazi u Evropi?", correct: "44", wrong: ["39", "47", "51", "36", "42"] },
      de: { language: "de", continent: "Europa", question: "Koliko se država nalazi u Evropi?", correct: "44", wrong: ["39", "47", "51", "36", "42"] },
      ru: { language: "ru", continent: "Европа", question: "Koliko se država nalazi u Evropi?", correct: "44", wrong: ["39", "47", "51", "36", "42"] },
      zh: { language: "zh", continent: "欧洲", question: "Koliko se država nalazi u Evropi?", correct: "44", wrong: ["39", "47", "51", "36", "42"] },
      et: { language: "et", continent: "Euroopa", question: "Koliko se država nalazi u Evropi?", correct: "44", wrong: ["39", "47", "51", "36", "42"] }
    }
  },
  {
    id: "eu-19",
    translations: {
      sr: { language: "sr", continent: "Evropa", question: "Koju evropsku državu nazivamo 'Zemlja leda i vatre'?", correct: "Island", wrong: ["Norveška", "Finska", "Grenland", "Litvanija", "Estonija"] },
      en: { language: "en", continent: "Europe", question: "Koju evropsku državu nazivamo 'Zemlja leda i vatre'?", correct: "Island", wrong: ["Norveška", "Finska", "Grenland", "Litvanija", "Estonija"] },
      de: { language: "de", continent: "Europa", question: "Koju evropsku državu nazivamo 'Zemlja leda i vatre'?", correct: "Island", wrong: ["Norveška", "Finska", "Grenland", "Litvanija", "Estonija"] },
      ru: { language: "ru", continent: "Европа", question: "Koju evropsku državu nazivamo 'Zemlja leda i vatre'?", correct: "Island", wrong: ["Norveška", "Finska", "Grenland", "Litvanija", "Estonija"] },
      zh: { language: "zh", continent: "欧洲", question: "Koju evropsku državu nazivamo 'Zemlja leda i vatre'?", correct: "Island", wrong: ["Norveška", "Finska", "Grenland", "Litvanija", "Estonija"] },
      et: { language: "et", continent: "Euroopa", question: "Koju evropsku državu nazivamo 'Zemlja leda i vatre'?", correct: "Island", wrong: ["Norveška", "Finska", "Grenland", "Litvanija", "Estonija"] }
    }
  },
  {
    id: "eu-20",
    translations: {
      sr: { language: "sr", continent: "Evropa", question: "Kako se zove najmanja država u Evropi?", correct: "Vatikan", wrong: ["Monako", "San Marino", "Lihtenštajn", "Andora", "Luksemburg"] },
      en: { language: "en", continent: "Europe", question: "Kako se zove najmanja država u Evropi?", correct: "Vatikan", wrong: ["Monako", "San Marino", "Lihtenštajn", "Andora", "Luksemburg"] },
      de: { language: "de", continent: "Europa", question: "Kako se zove najmanja država u Evropi?", correct: "Vatikan", wrong: ["Monako", "San Marino", "Lihtenštajn", "Andora", "Luksemburg"] },
      ru: { language: "ru", continent: "Европа", question: "Kako se zove najmanja država u Evropi?", correct: "Vatikan", wrong: ["Monako", "San Marino", "Lihtenštajn", "Andora", "Luksemburg"] },
      zh: { language: "zh", continent: "欧洲", question: "Kako se zove najmanja država u Evropi?", correct: "Vatikan", wrong: ["Monako", "San Marino", "Lihtenštajn", "Andora", "Luksemburg"] },
      et: { language: "et", continent: "Euroopa", question: "Kako se zove najmanja država u Evropi?", correct: "Vatikan", wrong: ["Monako", "San Marino", "Lihtenštajn", "Andora", "Luksemburg"] }
    }
  },
  {
    id: "as-01",
    translations: {
      sr: { language: "sr", continent: "Azija", question: "Koja je najveća država u Aziji po površini?", correct: "Rusija", wrong: ["Kina", "Indija", "Kazahstan", "Mongolija", "Saudijska Arabija"] },
      en: { language: "en", continent: "Asia", question: "Koja je najveća država u Aziji po površini?", correct: "Rusija", wrong: ["Kina", "Indija", "Kazahstan", "Mongolija", "Saudijska Arabija"] },
      de: { language: "de", continent: "Asien", question: "Koja je najveća država u Aziji po površini?", correct: "Rusija", wrong: ["Kina", "Indija", "Kazahstan", "Mongolija", "Saudijska Arabija"] },
      ru: { language: "ru", continent: "Азия", question: "Koja je najveća država u Aziji po površini?", correct: "Rusija", wrong: ["Kina", "Indija", "Kazahstan", "Mongolija", "Saudijska Arabija"] },
      zh: { language: "zh", continent: "亚洲", question: "Koja je najveća država u Aziji po površini?", correct: "Rusija", wrong: ["Kina", "Indija", "Kazahstan", "Mongolija", "Saudijska Arabija"] },
      et: { language: "et", continent: "Aasia", question: "Koja je najveća država u Aziji po površini?", correct: "Rusija", wrong: ["Kina", "Indija", "Kazahstan", "Mongolija", "Saudijska Arabija"] }
    }
  },
  {
    id: "as-02",
    translations: {
      sr: { language: "sr", continent: "Azija", question: "Koja je najmnogoljudnija država Azije?", correct: "Indija", wrong: ["Kina", "Indonezija", "Pakistan", "Bangladesh", "Japan"] },
      en: { language: "en", continent: "Asia", question: "Koja je najmnogoljudnija država Azije?", correct: "Indija", wrong: ["Kina", "Indonezija", "Pakistan", "Bangladesh", "Japan"] },
      de: { language: "de", continent: "Asien", question: "Koja je najmnogoljudnija država Azije?", correct: "Indija", wrong: ["Kina", "Indonezija", "Pakistan", "Bangladesh", "Japan"] },
      ru: { language: "ru", continent: "Азия", question: "Koja je najmnogoljudnija država Azije?", correct: "Indija", wrong: ["Kina", "Indonezija", "Pakistan", "Bangladesh", "Japan"] },
      zh: { language: "zh", continent: "亚洲", question: "Koja je najmnogoljudnija država Azije?", correct: "Indija", wrong: ["Kina", "Indonezija", "Pakistan", "Bangladesh", "Japan"] },
      et: { language: "et", continent: "Aasia", question: "Koja je najmnogoljudnija država Azije?", correct: "Indija", wrong: ["Kina", "Indonezija", "Pakistan", "Bangladesh", "Japan"] }
    }
  },
  {
    id: "as-03",
    translations: {
      sr: { language: "sr", continent: "Azija", question: "Koji je najviši planinski vrh u Aziji i na svetu?", correct: "Mont Everest", wrong: ["K2", "Kangčendžanga", "Lhoce", "Makalu", "Čo Oju"] },
      en: { language: "en", continent: "Asia", question: "Koji je najviši planinski vrh u Aziji i na svetu?", correct: "Mont Everest", wrong: ["K2", "Kangčendžanga", "Lhoce", "Makalu", "Čo Oju"] },
      de: { language: "de", continent: "Asien", question: "Koji je najviši planinski vrh u Aziji i na svetu?", correct: "Mont Everest", wrong: ["K2", "Kangčendžanga", "Lhoce", "Makalu", "Čo Oju"] },
      ru: { language: "ru", continent: "Азия", question: "Koji je najviši planinski vrh u Aziji i na svetu?", correct: "Mont Everest", wrong: ["K2", "Kangčendžanga", "Lhoce", "Makalu", "Čo Oju"] },
      zh: { language: "zh", continent: "亚洲", question: "Koji je najviši planinski vrh u Aziji i na svetu?", correct: "Mont Everest", wrong: ["K2", "Kangčendžanga", "Lhoce", "Makalu", "Čo Oju"] },
      et: { language: "et", continent: "Aasia", question: "Koji je najviši planinski vrh u Aziji i na svetu?", correct: "Mont Everest", wrong: ["K2", "Kangčendžanga", "Lhoce", "Makalu", "Čo Oju"] }
    }
  },
  {
    id: "as-04",
    translations: {
      sr: { language: "sr", continent: "Azija", question: "Kako se zove najduža reka u Aziji?", correct: "Jangce", wrong: ["Žuta reka", "Mekong", "Gang", "Ind", "Irauadi"] },
      en: { language: "en", continent: "Asia", question: "Kako se zove najduža reka u Aziji?", correct: "Jangce", wrong: ["Žuta reka", "Mekong", "Gang", "Ind", "Irauadi"] },
      de: { language: "de", continent: "Asien", question: "Kako se zove najduža reka u Aziji?", correct: "Jangce", wrong: ["Žuta reka", "Mekong", "Gang", "Ind", "Irauadi"] },
      ru: { language: "ru", continent: "Азия", question: "Kako se zove najduža reka u Aziji?", correct: "Jangce", wrong: ["Žuta reka", "Mekong", "Gang", "Ind", "Irauadi"] },
      zh: { language: "zh", continent: "亚洲", question: "Kako se zove najduža reka u Aziji?", correct: "Jangce", wrong: ["Žuta reka", "Mekong", "Gang", "Ind", "Irauadi"] },
      et: { language: "et", continent: "Aasia", question: "Kako se zove najduža reka u Aziji?", correct: "Jangce", wrong: ["Žuta reka", "Mekong", "Gang", "Ind", "Irauadi"] }
    }
  },
  {
    id: "as-05",
    translations: {
      sr: { language: "sr", continent: "Azija", question: "Koja je najveća pustinja u Aziji?", correct: "Gobi", wrong: ["Arabijska pustinja", "Karakum", "Kizilkum", "Taklamakan", "Thar"] },
      en: { language: "en", continent: "Asia", question: "Koja je najveća pustinja u Aziji?", correct: "Gobi", wrong: ["Arabijska pustinja", "Karakum", "Kizilkum", "Taklamakan", "Thar"] },
      de: { language: "de", continent: "Asien", question: "Koja je najveća pustinja u Aziji?", correct: "Gobi", wrong: ["Arabijska pustinja", "Karakum", "Kizilkum", "Taklamakan", "Thar"] },
      ru: { language: "ru", continent: "Азия", question: "Koja je najveća pustinja u Aziji?", correct: "Gobi", wrong: ["Arabijska pustinja", "Karakum", "Kizilkum", "Taklamakan", "Thar"] },
      zh: { language: "zh", continent: "亚洲", question: "Koja je najveća pustinja u Aziji?", correct: "Gobi", wrong: ["Arabijska pustinja", "Karakum", "Kizilkum", "Taklamakan", "Thar"] },
      et: { language: "et", continent: "Aasia", question: "Koja je najveća pustinja u Aziji?", correct: "Gobi", wrong: ["Arabijska pustinja", "Karakum", "Kizilkum", "Taklamakan", "Thar"] }
    }
  },
  {
    id: "as-06",
    translations: {
      sr: { language: "sr", continent: "Azija", question: "Koja država zauzima najveći deo Arapskog poluostrva?", correct: "Saudijska Arabija", wrong: ["Jemen", "Oman", "UAE", "Kuvajt", "Katar"] },
      en: { language: "en", continent: "Asia", question: "Koja država zauzima najveći deo Arapskog poluostrva?", correct: "Saudijska Arabija", wrong: ["Jemen", "Oman", "UAE", "Kuvajt", "Katar"] },
      de: { language: "de", continent: "Asien", question: "Koja država zauzima najveći deo Arapskog poluostrva?", correct: "Saudijska Arabija", wrong: ["Jemen", "Oman", "UAE", "Kuvajt", "Katar"] },
      ru: { language: "ru", continent: "Азия", question: "Koja država zauzima najveći deo Arapskog poluostrva?", correct: "Saudijska Arabija", wrong: ["Jemen", "Oman", "UAE", "Kuvajt", "Katar"] },
      zh: { language: "zh", continent: "亚洲", question: "Koja država zauzima najveći deo Arapskog poluostrva?", correct: "Saudijska Arabija", wrong: ["Jemen", "Oman", "UAE", "Kuvajt", "Katar"] },
      et: { language: "et", continent: "Aasia", question: "Koja država zauzima najveći deo Arapskog poluostrva?", correct: "Saudijska Arabija", wrong: ["Jemen", "Oman", "UAE", "Kuvajt", "Katar"] }
    }
  },
  {
    id: "as-07",
    translations: {
      sr: { language: "sr", continent: "Azija", question: "Kako se zove najveće jezero u Aziji?", correct: "Kaspijsko more", wrong: ["Aralsko more", "Bajkal", "Balhaš", "Isik-kul", "Van jezero"] },
      en: { language: "en", continent: "Asia", question: "Kako se zove najveće jezero u Aziji?", correct: "Kaspijsko more", wrong: ["Aralsko more", "Bajkal", "Balhaš", "Isik-kul", "Van jezero"] },
      de: { language: "de", continent: "Asien", question: "Kako se zove najveće jezero u Aziji?", correct: "Kaspijsko more", wrong: ["Aralsko more", "Bajkal", "Balhaš", "Isik-kul", "Van jezero"] },
      ru: { language: "ru", continent: "Азия", question: "Kako se zove najveće jezero u Aziji?", correct: "Kaspijsko more", wrong: ["Aralsko more", "Bajkal", "Balhaš", "Isik-kul", "Van jezero"] },
      zh: { language: "zh", continent: "亚洲", question: "Kako se zove najveće jezero u Aziji?", correct: "Kaspijsko more", wrong: ["Aralsko more", "Bajkal", "Balhaš", "Isik-kul", "Van jezero"] },
      et: { language: "et", continent: "Aasia", question: "Kako se zove najveće jezero u Aziji?", correct: "Kaspijsko more", wrong: ["Aralsko more", "Bajkal", "Balhaš", "Isik-kul", "Van jezero"] }
    }
  },
  {
    id: "as-08",
    translations: {
      sr: { language: "sr", continent: "Azija", question: "Koji planinski lanac deli Indiju od Tibeta?", correct: "Himalaji", wrong: ["Hindukuš", "Karakorum", "Pamirska visoravan", "Vindhya", "Dekanski rit"] },
      en: { language: "en", continent: "Asia", question: "Koji planinski lanac deli Indiju od Tibeta?", correct: "Himalaji", wrong: ["Hindukuš", "Karakorum", "Pamirska visoravan", "Vindhya", "Dekanski rit"] },
      de: { language: "de", continent: "Asien", question: "Koji planinski lanac deli Indiju od Tibeta?", correct: "Himalaji", wrong: ["Hindukuš", "Karakorum", "Pamirska visoravan", "Vindhya", "Dekanski rit"] },
      ru: { language: "ru", continent: "Азия", question: "Koji planinski lanac deli Indiju od Tibeta?", correct: "Himalaji", wrong: ["Hindukuš", "Karakorum", "Pamirska visoravan", "Vindhya", "Dekanski rit"] },
      zh: { language: "zh", continent: "亚洲", question: "Koji planinski lanac deli Indiju od Tibeta?", correct: "Himalaji", wrong: ["Hindukuš", "Karakorum", "Pamirska visoravan", "Vindhya", "Dekanski rit"] },
      et: { language: "et", continent: "Aasia", question: "Koji planinski lanac deli Indiju od Tibeta?", correct: "Himalaji", wrong: ["Hindukuš", "Karakorum", "Pamirska visoravan", "Vindhya", "Dekanski rit"] }
    }
  },
  {
    id: "as-09",
    translations: {
      sr: { language: "sr", continent: "Azija", question: "Koja je najmanja država u Aziji po površini?", correct: "Maldivi", wrong: ["Bahrein", "Singapur", "Brunej", "Katar", "Kipar"] },
      en: { language: "en", continent: "Asia", question: "Koja je najmanja država u Aziji po površini?", correct: "Maldivi", wrong: ["Bahrein", "Singapur", "Brunej", "Katar", "Kipar"] },
      de: { language: "de", continent: "Asien", question: "Koja je najmanja država u Aziji po površini?", correct: "Maldivi", wrong: ["Bahrein", "Singapur", "Brunej", "Katar", "Kipar"] },
      ru: { language: "ru", continent: "Азия", question: "Koja je najmanja država u Aziji po površini?", correct: "Maldivi", wrong: ["Bahrein", "Singapur", "Brunej", "Katar", "Kipar"] },
      zh: { language: "zh", continent: "亚洲", question: "Koja je najmanja država u Aziji po površini?", correct: "Maldivi", wrong: ["Bahrein", "Singapur", "Brunej", "Katar", "Kipar"] },
      et: { language: "et", continent: "Aasia", question: "Koja je najmanja država u Aziji po površini?", correct: "Maldivi", wrong: ["Bahrein", "Singapur", "Brunej", "Katar", "Kipar"] }
    }
  },
  {
    id: "as-10",
    translations: {
      sr: { language: "sr", continent: "Azija", question: "Koji je glavni grad Kine?", correct: "Peking", wrong: ["Šangaj", "Hong Kong", "Guandžu", "Šendžen", "Čengdu"] },
      en: { language: "en", continent: "Asia", question: "Koji je glavni grad Kine?", correct: "Peking", wrong: ["Šangaj", "Hong Kong", "Guandžu", "Šendžen", "Čengdu"] },
      de: { language: "de", continent: "Asien", question: "Koji je glavni grad Kine?", correct: "Peking", wrong: ["Šangaj", "Hong Kong", "Guandžu", "Šendžen", "Čengdu"] },
      ru: { language: "ru", continent: "Азия", question: "Koji je glavni grad Kine?", correct: "Peking", wrong: ["Šangaj", "Hong Kong", "Guandžu", "Šendžen", "Čengdu"] },
      zh: { language: "zh", continent: "亚洲", question: "Koji je glavni grad Kine?", correct: "Peking", wrong: ["Šangaj", "Hong Kong", "Guandžu", "Šendžen", "Čengdu"] },
      et: { language: "et", continent: "Aasia", question: "Koji je glavni grad Kine?", correct: "Peking", wrong: ["Šangaj", "Hong Kong", "Guandžu", "Šendžen", "Čengdu"] }
    }
  },
  {
    id: "as-11",
    translations: {
      sr: { language: "sr", continent: "Azija", question: "Koja država je poznata kao 'Zemlja izlazećeg sunca'?", correct: "Japan", wrong: ["Kina", "Koreja", "Tajland", "Vijetnam", "Tajvan"] },
      en: { language: "en", continent: "Asia", question: "Koja država je poznata kao 'Zemlja izlazećeg sunca'?", correct: "Japan", wrong: ["Kina", "Koreja", "Tajland", "Vijetnam", "Tajvan"] },
      de: { language: "de", continent: "Asien", question: "Koja država je poznata kao 'Zemlja izlazećeg sunca'?", correct: "Japan", wrong: ["Kina", "Koreja", "Tajland", "Vijetnam", "Tajvan"] },
      ru: { language: "ru", continent: "Азия", question: "Koja država je poznata kao 'Zemlja izlazećeg sunca'?", correct: "Japan", wrong: ["Kina", "Koreja", "Tajland", "Vijetnam", "Tajvan"] },
      zh: { language: "zh", continent: "亚洲", question: "Koja država je poznata kao 'Zemlja izlazećeg sunca'?", correct: "Japan", wrong: ["Kina", "Koreja", "Tajland", "Vijetnam", "Tajvan"] },
      et: { language: "et", continent: "Aasia", question: "Koja država je poznata kao 'Zemlja izlazećeg sunca'?", correct: "Japan", wrong: ["Kina", "Koreja", "Tajland", "Vijetnam", "Tajvan"] }
    }
  },
  {
    id: "as-12",
    translations: {
      sr: { language: "sr", continent: "Azija", question: "Kako se zove najveće poluostrvo u Aziji?", correct: "Arabijsko poluostrvo", wrong: ["Indijsko poluostrvo", "Korejsko poluostrvo", "Kamčatka", "Malajsko poluostrvo", "Poluostrvo Indokina"] },
      en: { language: "en", continent: "Asia", question: "Kako se zove najveće poluostrvo u Aziji?", correct: "Arabijsko poluostrvo", wrong: ["Indijsko poluostrvo", "Korejsko poluostrvo", "Kamčatka", "Malajsko poluostrvo", "Poluostrvo Indokina"] },
      de: { language: "de", continent: "Asien", question: "Kako se zove najveće poluostrvo u Aziji?", correct: "Arabijsko poluostrvo", wrong: ["Indijsko poluostrvo", "Korejsko poluostrvo", "Kamčatka", "Malajsko poluostrvo", "Poluostrvo Indokina"] },
      ru: { language: "ru", continent: "Азия", question: "Kako se zove najveće poluostrvo u Aziji?", correct: "Arabijsko poluostrvo", wrong: ["Indijsko poluostrvo", "Korejsko poluostrvo", "Kamčatka", "Malajsko poluostrvo", "Poluostrvo Indokina"] },
      zh: { language: "zh", continent: "亚洲", question: "Kako se zove najveće poluostrvo u Aziji?", correct: "Arabijsko poluostrvo", wrong: ["Indijsko poluostrvo", "Korejsko poluostrvo", "Kamčatka", "Malajsko poluostrvo", "Poluostrvo Indokina"] },
      et: { language: "et", continent: "Aasia", question: "Kako se zove najveće poluostrvo u Aziji?", correct: "Arabijsko poluostrvo", wrong: ["Indijsko poluostrvo", "Korejsko poluostrvo", "Kamčatka", "Malajsko poluostrvo", "Poluostrvo Indokina"] }
    }
  },
  {
    id: "as-13",
    translations: {
      sr: { language: "sr", continent: "Azija", question: "Koja azijska država ima najviše aktivnih vulkana?", correct: "Indonezija", wrong: ["Japan", "Filipini", "Papua Nova Gvineja", "Rusija", "Kambodža"] },
      en: { language: "en", continent: "Asia", question: "Koja azijska država ima najviše aktivnih vulkana?", correct: "Indonezija", wrong: ["Japan", "Filipini", "Papua Nova Gvineja", "Rusija", "Kambodža"] },
      de: { language: "de", continent: "Asien", question: "Koja azijska država ima najviše aktivnih vulkana?", correct: "Indonezija", wrong: ["Japan", "Filipini", "Papua Nova Gvineja", "Rusija", "Kambodža"] },
      ru: { language: "ru", continent: "Азия", question: "Koja azijska država ima najviše aktivnih vulkana?", correct: "Indonezija", wrong: ["Japan", "Filipini", "Papua Nova Gvineja", "Rusija", "Kambodža"] },
      zh: { language: "zh", continent: "亚洲", question: "Koja azijska država ima najviše aktivnih vulkana?", correct: "Indonezija", wrong: ["Japan", "Filipini", "Papua Nova Gvineja", "Rusija", "Kambodža"] },
      et: { language: "et", continent: "Aasia", question: "Koja azijska država ima najviše aktivnih vulkana?", correct: "Indonezija", wrong: ["Japan", "Filipini", "Papua Nova Gvineja", "Rusija", "Kambodža"] }
    }
  },
  {
    id: "as-14",
    translations: {
      sr: { language: "sr", continent: "Azija", question: "Kako se zove najdublje jezero na svetu koje se nalazi u Aziji?", correct: "Bajkalsko jezero", wrong: ["Kaspijsko more", "Aralsko more", "Tonle Sap", "Balhaš", "Isik-kul"] },
      en: { language: "en", continent: "Asia", question: "Kako se zove najdublje jezero na svetu koje se nalazi u Aziji?", correct: "Bajkalsko jezero", wrong: ["Kaspijsko more", "Aralsko more", "Tonle Sap", "Balhaš", "Isik-kul"] },
      de: { language: "de", continent: "Asien", question: "Kako se zove najdublje jezero na svetu koje se nalazi u Aziji?", correct: "Bajkalsko jezero", wrong: ["Kaspijsko more", "Aralsko more", "Tonle Sap", "Balhaš", "Isik-kul"] },
      ru: { language: "ru", continent: "Азия", question: "Kako se zove najdublje jezero na svetu koje se nalazi u Aziji?", correct: "Bajkalsko jezero", wrong: ["Kaspijsko more", "Aralsko more", "Tonle Sap", "Balhaš", "Isik-kul"] },
      zh: { language: "zh", continent: "亚洲", question: "Kako se zove najdublje jezero na svetu koje se nalazi u Aziji?", correct: "Bajkalsko jezero", wrong: ["Kaspijsko more", "Aralsko more", "Tonle Sap", "Balhaš", "Isik-kul"] },
      et: { language: "et", continent: "Aasia", question: "Kako se zove najdublje jezero na svetu koje se nalazi u Aziji?", correct: "Bajkalsko jezero", wrong: ["Kaspijsko more", "Aralsko more", "Tonle Sap", "Balhaš", "Isik-kul"] }
    }
  },
  {
    id: "as-15",
    translations: {
      sr: { language: "sr", continent: "Azija", question: "Koja država je najveći proizvođač pirinča na svetu?", correct: "Kina", wrong: ["Indija", "Indonezija", "Bangladesh", "Vijetnam", "Tajland"] },
      en: { language: "en", continent: "Asia", question: "Koja država je najveći proizvođač pirinča na svetu?", correct: "Kina", wrong: ["Indija", "Indonezija", "Bangladesh", "Vijetnam", "Tajland"] },
      de: { language: "de", continent: "Asien", question: "Koja država je najveći proizvođač pirinča na svetu?", correct: "Kina", wrong: ["Indija", "Indonezija", "Bangladesh", "Vijetnam", "Tajland"] },
      ru: { language: "ru", continent: "Азия", question: "Koja država je najveći proizvođač pirinča na svetu?", correct: "Kina", wrong: ["Indija", "Indonezija", "Bangladesh", "Vijetnam", "Tajland"] },
      zh: { language: "zh", continent: "亚洲", question: "Koja država je najveći proizvođač pirinča na svetu?", correct: "Kina", wrong: ["Indija", "Indonezija", "Bangladesh", "Vijetnam", "Tajland"] },
      et: { language: "et", continent: "Aasia", question: "Koja država je najveći proizvođač pirinča na svetu?", correct: "Kina", wrong: ["Indija", "Indonezija", "Bangladesh", "Vijetnam", "Tajland"] }
    }
  },
  {
    id: "as-16",
    translations: {
      sr: { language: "sr", continent: "Azija", question: "Kako se zove čuveni kineski zid?", correct: "Veliki kineski zid", wrong: ["Zid zmaja", "Carska ograda", "Pekinška barijera", "Zid mira", "Mingova tvrđava"] },
      en: { language: "en", continent: "Asia", question: "Kako se zove čuveni kineski zid?", correct: "Veliki kineski zid", wrong: ["Zid zmaja", "Carska ograda", "Pekinška barijera", "Zid mira", "Mingova tvrđava"] },
      de: { language: "de", continent: "Asien", question: "Kako se zove čuveni kineski zid?", correct: "Veliki kineski zid", wrong: ["Zid zmaja", "Carska ograda", "Pekinška barijera", "Zid mira", "Mingova tvrđava"] },
      ru: { language: "ru", continent: "Азия", question: "Kako se zove čuveni kineski zid?", correct: "Veliki kineski zid", wrong: ["Zid zmaja", "Carska ograda", "Pekinška barijera", "Zid mira", "Mingova tvrđava"] },
      zh: { language: "zh", continent: "亚洲", question: "Kako se zove čuveni kineski zid?", correct: "Veliki kineski zid", wrong: ["Zid zmaja", "Carska ograda", "Pekinška barijera", "Zid mira", "Mingova tvrđava"] },
      et: { language: "et", continent: "Aasia", question: "Kako se zove čuveni kineski zid?", correct: "Veliki kineski zid", wrong: ["Zid zmaja", "Carska ograda", "Pekinška barijera", "Zid mira", "Mingova tvrđava"] }
    }
  },
  {
    id: "as-17",
    translations: {
      sr: { language: "sr", continent: "Azija", question: "Koja azijska zemlja je poznata po samurajima?", correct: "Japan", wrong: ["Kina", "Koreja", "Mongolija", "Tajland", "Vijetnam"] },
      en: { language: "en", continent: "Asia", question: "Koja azijska zemlja je poznata po samurajima?", correct: "Japan", wrong: ["Kina", "Koreja", "Mongolija", "Tajland", "Vijetnam"] },
      de: { language: "de", continent: "Asien", question: "Koja azijska zemlja je poznata po samurajima?", correct: "Japan", wrong: ["Kina", "Koreja", "Mongolija", "Tajland", "Vijetnam"] },
      ru: { language: "ru", continent: "Азия", question: "Koja azijska zemlja je poznata po samurajima?", correct: "Japan", wrong: ["Kina", "Koreja", "Mongolija", "Tajland", "Vijetnam"] },
      zh: { language: "zh", continent: "亚洲", question: "Koja azijska zemlja je poznata po samurajima?", correct: "Japan", wrong: ["Kina", "Koreja", "Mongolija", "Tajland", "Vijetnam"] },
      et: { language: "et", continent: "Aasia", question: "Koja azijska zemlja je poznata po samurajima?", correct: "Japan", wrong: ["Kina", "Koreja", "Mongolija", "Tajland", "Vijetnam"] }
    }
  },
  {
    id: "as-18",
    translations: {
      sr: { language: "sr", continent: "Azija", question: "Koja azijska životinja je poznata po tome što jede bambus?", correct: "Džinovska panda", wrong: ["Crvena panda", "Koala", "Slonova kornjača", "Orangutan", "Tigar"] },
      en: { language: "en", continent: "Asia", question: "Koja azijska životinja je poznata po tome što jede bambus?", correct: "Džinovska panda", wrong: ["Crvena panda", "Koala", "Slonova kornjača", "Orangutan", "Tigar"] },
      de: { language: "de", continent: "Asien", question: "Koja azijska životinja je poznata po tome što jede bambus?", correct: "Džinovska panda", wrong: ["Crvena panda", "Koala", "Slonova kornjača", "Orangutan", "Tigar"] },
      ru: { language: "ru", continent: "Азия", question: "Koja azijska životinja je poznata po tome što jede bambus?", correct: "Džinovska panda", wrong: ["Crvena panda", "Koala", "Slonova kornjača", "Orangutan", "Tigar"] },
      zh: { language: "zh", continent: "亚洲", question: "Koja azijska životinja je poznata po tome što jede bambus?", correct: "Džinovska panda", wrong: ["Crvena panda", "Koala", "Slonova kornjača", "Orangutan", "Tigar"] },
      et: { language: "et", continent: "Aasia", question: "Koja azijska životinja je poznata po tome što jede bambus?", correct: "Džinovska panda", wrong: ["Crvena panda", "Koala", "Slonova kornjača", "Orangutan", "Tigar"] }
    }
  },
  {
    id: "as-19",
    translations: {
      sr: { language: "sr", continent: "Azija", question: "Koja azijska životinja je simbol snage i pojavljuje se u kineskim legendama?", correct: "Zmaj", wrong: ["Tigar", "Lav", "Slon", "Feniks", "Zlatna riba"] },
      en: { language: "en", continent: "Asia", question: "Koja azijska životinja je simbol snage i pojavljuje se u kineskim legendama?", correct: "Zmaj", wrong: ["Tigar", "Lav", "Slon", "Feniks", "Zlatna riba"] },
      de: { language: "de", continent: "Asien", question: "Koja azijska životinja je simbol snage i pojavljuje se u kineskim legendama?", correct: "Zmaj", wrong: ["Tigar", "Lav", "Slon", "Feniks", "Zlatna riba"] },
      ru: { language: "ru", continent: "Азия", question: "Koja azijska životinja je simbol snage i pojavljuje se u kineskim legendama?", correct: "Zmaj", wrong: ["Tigar", "Lav", "Slon", "Feniks", "Zlatna riba"] },
      zh: { language: "zh", continent: "亚洲", question: "Koja azijska životinja je simbol snage i pojavljuje se u kineskim legendama?", correct: "Zmaj", wrong: ["Tigar", "Lav", "Slon", "Feniks", "Zlatna riba"] },
      et: { language: "et", continent: "Aasia", question: "Koja azijska životinja je simbol snage i pojavljuje se u kineskim legendama?", correct: "Zmaj", wrong: ["Tigar", "Lav", "Slon", "Feniks", "Zlatna riba"] }
    }
  },
  {
    id: "as-20",
    translations: {
      sr: { language: "sr", continent: "Azija", question: "U kojoj državi je nastao šah?", correct: "Indija", wrong: ["Persija (Iran)", "Kina", "Arabija", "Grčka", "Mesopotamija"] },
      en: { language: "en", continent: "Asia", question: "U kojoj državi je nastao šah?", correct: "Indija", wrong: ["Persija (Iran)", "Kina", "Arabija", "Grčka", "Mesopotamija"] },
      de: { language: "de", continent: "Asien", question: "U kojoj državi je nastao šah?", correct: "Indija", wrong: ["Persija (Iran)", "Kina", "Arabija", "Grčka", "Mesopotamija"] },
      ru: { language: "ru", continent: "Азия", question: "U kojoj državi je nastao šah?", correct: "Indija", wrong: ["Persija (Iran)", "Kina", "Arabija", "Grčka", "Mesopotamija"] },
      zh: { language: "zh", continent: "亚洲", question: "U kojoj državi je nastao šah?", correct: "Indija", wrong: ["Persija (Iran)", "Kina", "Arabija", "Grčka", "Mesopotamija"] },
      et: { language: "et", continent: "Aasia", question: "U kojoj državi je nastao šah?", correct: "Indija", wrong: ["Persija (Iran)", "Kina", "Arabija", "Grčka", "Mesopotamija"] }
    }
  },
  {
    id: "af-01",
    translations: {
      sr: { language: "sr", continent: "Afrika", question: "Koja je najduža reka u Africi?", correct: "Nil", wrong: ["Kongo", "Niger", "Zambezi", "Limpopo", "Senegal"] },
      en: { language: "en", continent: "Africa", question: "Koja je najduža reka u Africi?", correct: "Nil", wrong: ["Kongo", "Niger", "Zambezi", "Limpopo", "Senegal"] },
      de: { language: "de", continent: "Afrika", question: "Koja je najduža reka u Africi?", correct: "Nil", wrong: ["Kongo", "Niger", "Zambezi", "Limpopo", "Senegal"] },
      ru: { language: "ru", continent: "Африка", question: "Koja je najduža reka u Africi?", correct: "Nil", wrong: ["Kongo", "Niger", "Zambezi", "Limpopo", "Senegal"] },
      zh: { language: "zh", continent: "非洲", question: "Koja je najduža reka u Africi?", correct: "Nil", wrong: ["Kongo", "Niger", "Zambezi", "Limpopo", "Senegal"] },
      et: { language: "et", continent: "Aafrika", question: "Koja je najduža reka u Africi?", correct: "Nil", wrong: ["Kongo", "Niger", "Zambezi", "Limpopo", "Senegal"] }
    }
  },
  {
    id: "af-02",
    translations: {
      sr: { language: "sr", continent: "Afrika", question: "Koji je najviši vrh Afrike?", correct: "Kilimandžaro", wrong: ["Mont Kenija", "Ras Dashen", "Margherita Peak", "Toubkal", "Meru"] },
      en: { language: "en", continent: "Africa", question: "Koji je najviši vrh Afrike?", correct: "Kilimandžaro", wrong: ["Mont Kenija", "Ras Dashen", "Margherita Peak", "Toubkal", "Meru"] },
      de: { language: "de", continent: "Afrika", question: "Koji je najviši vrh Afrike?", correct: "Kilimandžaro", wrong: ["Mont Kenija", "Ras Dashen", "Margherita Peak", "Toubkal", "Meru"] },
      ru: { language: "ru", continent: "Африка", question: "Koji je najviši vrh Afrike?", correct: "Kilimandžaro", wrong: ["Mont Kenija", "Ras Dashen", "Margherita Peak", "Toubkal", "Meru"] },
      zh: { language: "zh", continent: "非洲", question: "Koji je najviši vrh Afrike?", correct: "Kilimandžaro", wrong: ["Mont Kenija", "Ras Dashen", "Margherita Peak", "Toubkal", "Meru"] },
      et: { language: "et", continent: "Aafrika", question: "Koji je najviši vrh Afrike?", correct: "Kilimandžaro", wrong: ["Mont Kenija", "Ras Dashen", "Margherita Peak", "Toubkal", "Meru"] }
    }
  },
  {
    id: "af-03",
    translations: {
      sr: { language: "sr", continent: "Afrika", question: "Kako se zove najveća pustinja u Africi?", correct: "Sahara", wrong: ["Kalahari", "Namib", "Arabijska pustinja", "Ogaden", "Danakil"] },
      en: { language: "en", continent: "Africa", question: "Kako se zove najveća pustinja u Africi?", correct: "Sahara", wrong: ["Kalahari", "Namib", "Arabijska pustinja", "Ogaden", "Danakil"] },
      de: { language: "de", continent: "Afrika", question: "Kako se zove najveća pustinja u Africi?", correct: "Sahara", wrong: ["Kalahari", "Namib", "Arabijska pustinja", "Ogaden", "Danakil"] },
      ru: { language: "ru", continent: "Африка", question: "Kako se zove najveća pustinja u Africi?", correct: "Sahara", wrong: ["Kalahari", "Namib", "Arabijska pustinja", "Ogaden", "Danakil"] },
      zh: { language: "zh", continent: "非洲", question: "Kako se zove najveća pustinja u Africi?", correct: "Sahara", wrong: ["Kalahari", "Namib", "Arabijska pustinja", "Ogaden", "Danakil"] },
      et: { language: "et", continent: "Aafrika", question: "Kako se zove najveća pustinja u Africi?", correct: "Sahara", wrong: ["Kalahari", "Namib", "Arabijska pustinja", "Ogaden", "Danakil"] }
    }
  },
  {
    id: "af-04",
    translations: {
      sr: { language: "sr", continent: "Afrika", question: "Kako se zove planinski venac u severozapadnom delu Afrike?", correct: "Atlas planine", wrong: ["Drakensberg", "Ahagar", "Tibesti", "Virunga", "Etiopska visoravan"] },
      en: { language: "en", continent: "Africa", question: "Kako se zove planinski venac u severozapadnom delu Afrike?", correct: "Atlas planine", wrong: ["Drakensberg", "Ahagar", "Tibesti", "Virunga", "Etiopska visoravan"] },
      de: { language: "de", continent: "Afrika", question: "Kako se zove planinski venac u severozapadnom delu Afrike?", correct: "Atlas planine", wrong: ["Drakensberg", "Ahagar", "Tibesti", "Virunga", "Etiopska visoravan"] },
      ru: { language: "ru", continent: "Африка", question: "Kako se zove planinski venac u severozapadnom delu Afrike?", correct: "Atlas planine", wrong: ["Drakensberg", "Ahagar", "Tibesti", "Virunga", "Etiopska visoravan"] },
      zh: { language: "zh", continent: "非洲", question: "Kako se zove planinski venac u severozapadnom delu Afrike?", correct: "Atlas planine", wrong: ["Drakensberg", "Ahagar", "Tibesti", "Virunga", "Etiopska visoravan"] },
      et: { language: "et", continent: "Aafrika", question: "Kako se zove planinski venac u severozapadnom delu Afrike?", correct: "Atlas planine", wrong: ["Drakensberg", "Ahagar", "Tibesti", "Virunga", "Etiopska visoravan"] }
    }
  },
  {
    id: "af-05",
    translations: {
      sr: { language: "sr", continent: "Afrika", question: "Koji je glavni grad Egipta?", correct: "Kairo", wrong: ["Aleksandrija", "Luksur", "Asuan", "Giza", "Port Said"] },
      en: { language: "en", continent: "Africa", question: "Koji je glavni grad Egipta?", correct: "Kairo", wrong: ["Aleksandrija", "Luksur", "Asuan", "Giza", "Port Said"] },
      de: { language: "de", continent: "Afrika", question: "Koji je glavni grad Egipta?", correct: "Kairo", wrong: ["Aleksandrija", "Luksur", "Asuan", "Giza", "Port Said"] },
      ru: { language: "ru", continent: "Африка", question: "Koji je glavni grad Egipta?", correct: "Kairo", wrong: ["Aleksandrija", "Luksur", "Asuan", "Giza", "Port Said"] },
      zh: { language: "zh", continent: "非洲", question: "Koji je glavni grad Egipta?", correct: "Kairo", wrong: ["Aleksandrija", "Luksur", "Asuan", "Giza", "Port Said"] },
      et: { language: "et", continent: "Aafrika", question: "Koji je glavni grad Egipta?", correct: "Kairo", wrong: ["Aleksandrija", "Luksur", "Asuan", "Giza", "Port Said"] }
    }
  },
  {
    id: "af-06",
    translations: {
      sr: { language: "sr", continent: "Afrika", question: "Kako se zove najveće jezero u Africi?", correct: "Viktoriino jezero", wrong: ["Tanganjika", "Malavi", "Čad", "Turkana", "Albert"] },
      en: { language: "en", continent: "Africa", question: "Kako se zove najveće jezero u Africi?", correct: "Viktoriino jezero", wrong: ["Tanganjika", "Malavi", "Čad", "Turkana", "Albert"] },
      de: { language: "de", continent: "Afrika", question: "Kako se zove najveće jezero u Africi?", correct: "Viktoriino jezero", wrong: ["Tanganjika", "Malavi", "Čad", "Turkana", "Albert"] },
      ru: { language: "ru", continent: "Африка", question: "Kako se zove najveće jezero u Africi?", correct: "Viktoriino jezero", wrong: ["Tanganjika", "Malavi", "Čad", "Turkana", "Albert"] },
      zh: { language: "zh", continent: "非洲", question: "Kako se zove najveće jezero u Africi?", correct: "Viktoriino jezero", wrong: ["Tanganjika", "Malavi", "Čad", "Turkana", "Albert"] },
      et: { language: "et", continent: "Aafrika", question: "Kako se zove najveće jezero u Africi?", correct: "Viktoriino jezero", wrong: ["Tanganjika", "Malavi", "Čad", "Turkana", "Albert"] }
    }
  },
  {
    id: "af-07",
    translations: {
      sr: { language: "sr", continent: "Afrika", question: "Koja afrička država ima najveću površinu?", correct: "Alžir", wrong: ["Sudan", "Libija", "Egipat", "Demokratska Republika Kongo", "Niger"] },
      en: { language: "en", continent: "Africa", question: "Koja afrička država ima najveću površinu?", correct: "Alžir", wrong: ["Sudan", "Libija", "Egipat", "Demokratska Republika Kongo", "Niger"] },
      de: { language: "de", continent: "Afrika", question: "Koja afrička država ima najveću površinu?", correct: "Alžir", wrong: ["Sudan", "Libija", "Egipat", "Demokratska Republika Kongo", "Niger"] },
      ru: { language: "ru", continent: "Африка", question: "Koja afrička država ima najveću površinu?", correct: "Alžir", wrong: ["Sudan", "Libija", "Egipat", "Demokratska Republika Kongo", "Niger"] },
      zh: { language: "zh", continent: "非洲", question: "Koja afrička država ima najveću površinu?", correct: "Alžir", wrong: ["Sudan", "Libija", "Egipat", "Demokratska Republika Kongo", "Niger"] },
      et: { language: "et", continent: "Aafrika", question: "Koja afrička država ima najveću površinu?", correct: "Alžir", wrong: ["Sudan", "Libija", "Egipat", "Demokratska Republika Kongo", "Niger"] }
    }
  },
  {
    id: "af-08",
    translations: {
      sr: { language: "sr", continent: "Afrika", question: "Koja afrička država ima najveći broj stanovnika?", correct: "Nigerija", wrong: ["Etiopija", "Egipat", "Demokratska Republika Kongo", "Južna Afrika", "Tanzanija"] },
      en: { language: "en", continent: "Africa", question: "Koja afrička država ima najveći broj stanovnika?", correct: "Nigerija", wrong: ["Etiopija", "Egipat", "Demokratska Republika Kongo", "Južna Afrika", "Tanzanija"] },
      de: { language: "de", continent: "Afrika", question: "Koja afrička država ima najveći broj stanovnika?", correct: "Nigerija", wrong: ["Etiopija", "Egipat", "Demokratska Republika Kongo", "Južna Afrika", "Tanzanija"] },
      ru: { language: "ru", continent: "Африка", question: "Koja afrička država ima najveći broj stanovnika?", correct: "Nigerija", wrong: ["Etiopija", "Egipat", "Demokratska Republika Kongo", "Južna Afrika", "Tanzanija"] },
      zh: { language: "zh", continent: "非洲", question: "Koja afrička država ima najveći broj stanovnika?", correct: "Nigerija", wrong: ["Etiopija", "Egipat", "Demokratska Republika Kongo", "Južna Afrika", "Tanzanija"] },
      et: { language: "et", continent: "Aafrika", question: "Koja afrička država ima najveći broj stanovnika?", correct: "Nigerija", wrong: ["Etiopija", "Egipat", "Demokratska Republika Kongo", "Južna Afrika", "Tanzanija"] }
    }
  },
  {
    id: "af-09",
    translations: {
      sr: { language: "sr", continent: "Afrika", question: "Koji narod niskog rasta živi u prašumama centralne Afrike?", correct: "Pigmeji", wrong: ["Masaji", "Zulusи", "Hauza", "Joruba", "Berberi"] },
      en: { language: "en", continent: "Africa", question: "Koji narod niskog rasta živi u prašumama centralne Afrike?", correct: "Pigmeji", wrong: ["Masaji", "Zulusи", "Hauza", "Joruba", "Berberi"] },
      de: { language: "de", continent: "Afrika", question: "Koji narod niskog rasta živi u prašumama centralne Afrike?", correct: "Pigmeji", wrong: ["Masaji", "Zulusи", "Hauza", "Joruba", "Berberi"] },
      ru: { language: "ru", continent: "Африка", question: "Koji narod niskog rasta živi u prašumama centralne Afrike?", correct: "Pigmeji", wrong: ["Masaji", "Zulusи", "Hauza", "Joruba", "Berberi"] },
      zh: { language: "zh", continent: "非洲", question: "Koji narod niskog rasta živi u prašumama centralne Afrike?", correct: "Pigmeji", wrong: ["Masaji", "Zulusи", "Hauza", "Joruba", "Berberi"] },
      et: { language: "et", continent: "Aafrika", question: "Koji narod niskog rasta živi u prašumama centralne Afrike?", correct: "Pigmeji", wrong: ["Masaji", "Zulusи", "Hauza", "Joruba", "Berberi"] }
    }
  },
  {
    id: "af-10",
    translations: {
      sr: { language: "sr", continent: "Afrika", question: "Koja afrička reka se uliva u Sredozemno more?", correct: "Nil", wrong: ["Kongo", "Niger", "Senegal", "Zambezi", "Limpopo"] },
      en: { language: "en", continent: "Africa", question: "Koja afrička reka se uliva u Sredozemno more?", correct: "Nil", wrong: ["Kongo", "Niger", "Senegal", "Zambezi", "Limpopo"] },
      de: { language: "de", continent: "Afrika", question: "Koja afrička reka se uliva u Sredozemno more?", correct: "Nil", wrong: ["Kongo", "Niger", "Senegal", "Zambezi", "Limpopo"] },
      ru: { language: "ru", continent: "Африка", question: "Koja afrička reka se uliva u Sredozemno more?", correct: "Nil", wrong: ["Kongo", "Niger", "Senegal", "Zambezi", "Limpopo"] },
      zh: { language: "zh", continent: "非洲", question: "Koja afrička reka se uliva u Sredozemno more?", correct: "Nil", wrong: ["Kongo", "Niger", "Senegal", "Zambezi", "Limpopo"] },
      et: { language: "et", continent: "Aafrika", question: "Koja afrička reka se uliva u Sredozemno more?", correct: "Nil", wrong: ["Kongo", "Niger", "Senegal", "Zambezi", "Limpopo"] }
    }
  },
  {
    id: "af-11",
    translations: {
      sr: { language: "sr", continent: "Afrika", question: "Kako se zove velika reka centralne Afrike?", correct: "Reka Kongo", wrong: ["Nil", "Niger", "Zambezi", "Ubangi", "Kasai"] },
      en: { language: "en", continent: "Africa", question: "Kako se zove velika reka centralne Afrike?", correct: "Reka Kongo", wrong: ["Nil", "Niger", "Zambezi", "Ubangi", "Kasai"] },
      de: { language: "de", continent: "Afrika", question: "Kako se zove velika reka centralne Afrike?", correct: "Reka Kongo", wrong: ["Nil", "Niger", "Zambezi", "Ubangi", "Kasai"] },
      ru: { language: "ru", continent: "Африка", question: "Kako se zove velika reka centralne Afrike?", correct: "Reka Kongo", wrong: ["Nil", "Niger", "Zambezi", "Ubangi", "Kasai"] },
      zh: { language: "zh", continent: "非洲", question: "Kako se zove velika reka centralne Afrike?", correct: "Reka Kongo", wrong: ["Nil", "Niger", "Zambezi", "Ubangi", "Kasai"] },
      et: { language: "et", continent: "Aafrika", question: "Kako se zove velika reka centralne Afrike?", correct: "Reka Kongo", wrong: ["Nil", "Niger", "Zambezi", "Ubangi", "Kasai"] }
    }
  },
  {
    id: "af-12",
    translations: {
      sr: { language: "sr", continent: "Afrika", question: "Kako se zove velika tropska prašuma Afrike?", correct: "Kongoska prašuma", wrong: ["Amazonija", "Daintree", "Sundarbans", "Tongass", "Bosawás"] },
      en: { language: "en", continent: "Africa", question: "Kako se zove velika tropska prašuma Afrike?", correct: "Kongoska prašuma", wrong: ["Amazonija", "Daintree", "Sundarbans", "Tongass", "Bosawás"] },
      de: { language: "de", continent: "Afrika", question: "Kako se zove velika tropska prašuma Afrike?", correct: "Kongoska prašuma", wrong: ["Amazonija", "Daintree", "Sundarbans", "Tongass", "Bosawás"] },
      ru: { language: "ru", continent: "Африка", question: "Kako se zove velika tropska prašuma Afrike?", correct: "Kongoska prašuma", wrong: ["Amazonija", "Daintree", "Sundarbans", "Tongass", "Bosawás"] },
      zh: { language: "zh", continent: "非洲", question: "Kako se zove velika tropska prašuma Afrike?", correct: "Kongoska prašuma", wrong: ["Amazonija", "Daintree", "Sundarbans", "Tongass", "Bosawás"] },
      et: { language: "et", continent: "Aafrika", question: "Kako se zove velika tropska prašuma Afrike?", correct: "Kongoska prašuma", wrong: ["Amazonija", "Daintree", "Sundarbans", "Tongass", "Bosawás"] }
    }
  },
  {
    id: "af-13",
    translations: {
      sr: { language: "sr", continent: "Afrika", question: "Koja afrička država je poznata po piramidama?", correct: "Egipat", wrong: ["Sudan", "Etiopija", "Libija", "Maroko", "Tunis"] },
      en: { language: "en", continent: "Africa", question: "Koja afrička država je poznata po piramidama?", correct: "Egipat", wrong: ["Sudan", "Etiopija", "Libija", "Maroko", "Tunis"] },
      de: { language: "de", continent: "Afrika", question: "Koja afrička država je poznata po piramidama?", correct: "Egipat", wrong: ["Sudan", "Etiopija", "Libija", "Maroko", "Tunis"] },
      ru: { language: "ru", continent: "Африка", question: "Koja afrička država je poznata po piramidama?", correct: "Egipat", wrong: ["Sudan", "Etiopija", "Libija", "Maroko", "Tunis"] },
      zh: { language: "zh", continent: "非洲", question: "Koja afrička država je poznata po piramidama?", correct: "Egipat", wrong: ["Sudan", "Etiopija", "Libija", "Maroko", "Tunis"] },
      et: { language: "et", continent: "Aafrika", question: "Koja afrička država je poznata po piramidama?", correct: "Egipat", wrong: ["Sudan", "Etiopija", "Libija", "Maroko", "Tunis"] }
    }
  },
  {
    id: "af-14",
    translations: {
      sr: { language: "sr", continent: "Afrika", question: "Koja afrička reka je druga po dužini u Africi?", correct: "Reka Kongo", wrong: ["Niger", "Zambezi", "Limpopo", "Senegal", "Volta"] },
      en: { language: "en", continent: "Africa", question: "Koja afrička reka je druga po dužini u Africi?", correct: "Reka Kongo", wrong: ["Niger", "Zambezi", "Limpopo", "Senegal", "Volta"] },
      de: { language: "de", continent: "Afrika", question: "Koja afrička reka je druga po dužini u Africi?", correct: "Reka Kongo", wrong: ["Niger", "Zambezi", "Limpopo", "Senegal", "Volta"] },
      ru: { language: "ru", continent: "Африка", question: "Koja afrička reka je druga po dužini u Africi?", correct: "Reka Kongo", wrong: ["Niger", "Zambezi", "Limpopo", "Senegal", "Volta"] },
      zh: { language: "zh", continent: "非洲", question: "Koja afrička reka je druga po dužini u Africi?", correct: "Reka Kongo", wrong: ["Niger", "Zambezi", "Limpopo", "Senegal", "Volta"] },
      et: { language: "et", continent: "Aafrika", question: "Koja afrička reka je druga po dužini u Africi?", correct: "Reka Kongo", wrong: ["Niger", "Zambezi", "Limpopo", "Senegal", "Volta"] }
    }
  },
  {
    id: "af-15",
    translations: {
      sr: { language: "sr", continent: "Afrika", question: "Kako se zove poznata visoravan u Africi?", correct: "Etiopska visoravan", wrong: ["Masajska visoravan", "Ahagar", "Tibesti", "Drakensberg", "Lunda"] },
      en: { language: "en", continent: "Africa", question: "Kako se zove poznata visoravan u Africi?", correct: "Etiopska visoravan", wrong: ["Masajska visoravan", "Ahagar", "Tibesti", "Drakensberg", "Lunda"] },
      de: { language: "de", continent: "Afrika", question: "Kako se zove poznata visoravan u Africi?", correct: "Etiopska visoravan", wrong: ["Masajska visoravan", "Ahagar", "Tibesti", "Drakensberg", "Lunda"] },
      ru: { language: "ru", continent: "Африка", question: "Kako se zove poznata visoravan u Africi?", correct: "Etiopska visoravan", wrong: ["Masajska visoravan", "Ahagar", "Tibesti", "Drakensberg", "Lunda"] },
      zh: { language: "zh", continent: "非洲", question: "Kako se zove poznata visoravan u Africi?", correct: "Etiopska visoravan", wrong: ["Masajska visoravan", "Ahagar", "Tibesti", "Drakensberg", "Lunda"] },
      et: { language: "et", continent: "Aafrika", question: "Kako se zove poznata visoravan u Africi?", correct: "Etiopska visoravan", wrong: ["Masajska visoravan", "Ahagar", "Tibesti", "Drakensberg", "Lunda"] }
    }
  },
  {
    id: "af-16",
    translations: {
      sr: { language: "sr", continent: "Afrika", question: "Koja afrička država ima isti naziv kao i njen glavni grad?", correct: "Džibuti", wrong: ["Tunis", "Alžir", "Luksemburg", "Singapur", "Kuveјt"] },
      en: { language: "en", continent: "Africa", question: "Koja afrička država ima isti naziv kao i njen glavni grad?", correct: "Džibuti", wrong: ["Tunis", "Alžir", "Luksemburg", "Singapur", "Kuveјt"] },
      de: { language: "de", continent: "Afrika", question: "Koja afrička država ima isti naziv kao i njen glavni grad?", correct: "Džibuti", wrong: ["Tunis", "Alžir", "Luksemburg", "Singapur", "Kuveјt"] },
      ru: { language: "ru", continent: "Африка", question: "Koja afrička država ima isti naziv kao i njen glavni grad?", correct: "Džibuti", wrong: ["Tunis", "Alžir", "Luksemburg", "Singapur", "Kuveјt"] },
      zh: { language: "zh", continent: "非洲", question: "Koja afrička država ima isti naziv kao i njen glavni grad?", correct: "Džibuti", wrong: ["Tunis", "Alžir", "Luksemburg", "Singapur", "Kuveјt"] },
      et: { language: "et", continent: "Aafrika", question: "Koja afrička država ima isti naziv kao i njen glavni grad?", correct: "Džibuti", wrong: ["Tunis", "Alžir", "Luksemburg", "Singapur", "Kuveјt"] }
    }
  },
  {
    id: "af-17",
    translations: {
      sr: { language: "sr", continent: "Afrika", question: "Kako se zove kanal koji povezuje Sredozemno i Crveno more?", correct: "Suecki kanal", wrong: ["Panamski kanal", "Korintski kanal", "Kilski kanal", "Beringov prolaz", "Gibraltarski prolaz"] },
      en: { language: "en", continent: "Africa", question: "Kako se zove kanal koji povezuje Sredozemno i Crveno more?", correct: "Suecki kanal", wrong: ["Panamski kanal", "Korintski kanal", "Kilski kanal", "Beringov prolaz", "Gibraltarski prolaz"] },
      de: { language: "de", continent: "Afrika", question: "Kako se zove kanal koji povezuje Sredozemno i Crveno more?", correct: "Suecki kanal", wrong: ["Panamski kanal", "Korintski kanal", "Kilski kanal", "Beringov prolaz", "Gibraltarski prolaz"] },
      ru: { language: "ru", continent: "Африка", question: "Kako se zove kanal koji povezuje Sredozemno i Crveno more?", correct: "Suecki kanal", wrong: ["Panamski kanal", "Korintski kanal", "Kilski kanal", "Beringov prolaz", "Gibraltarski prolaz"] },
      zh: { language: "zh", continent: "非洲", question: "Kako se zove kanal koji povezuje Sredozemno i Crveno more?", correct: "Suecki kanal", wrong: ["Panamski kanal", "Korintski kanal", "Kilski kanal", "Beringov prolaz", "Gibraltarski prolaz"] },
      et: { language: "et", continent: "Aafrika", question: "Kako se zove kanal koji povezuje Sredozemno i Crveno more?", correct: "Suecki kanal", wrong: ["Panamski kanal", "Korintski kanal", "Kilski kanal", "Beringov prolaz", "Gibraltarski prolaz"] }
    }
  },
  {
    id: "af-18",
    translations: {
      sr: { language: "sr", continent: "Afrika", question: "Koja afrička država je poznata po safari parkovima?", correct: "Kenija", wrong: ["Tanzanija", "Bocvana", "Namibija", "Zimbabve", "Zambia"] },
      en: { language: "en", continent: "Africa", question: "Koja afrička država je poznata po safari parkovima?", correct: "Kenija", wrong: ["Tanzanija", "Bocvana", "Namibija", "Zimbabve", "Zambia"] },
      de: { language: "de", continent: "Afrika", question: "Koja afrička država je poznata po safari parkovima?", correct: "Kenija", wrong: ["Tanzanija", "Bocvana", "Namibija", "Zimbabve", "Zambia"] },
      ru: { language: "ru", continent: "Африка", question: "Koja afrička država je poznata po safari parkovima?", correct: "Kenija", wrong: ["Tanzanija", "Bocvana", "Namibija", "Zimbabve", "Zambia"] },
      zh: { language: "zh", continent: "非洲", question: "Koja afrička država je poznata po safari parkovima?", correct: "Kenija", wrong: ["Tanzanija", "Bocvana", "Namibija", "Zimbabve", "Zambia"] },
      et: { language: "et", continent: "Aafrika", question: "Koja afrička država je poznata po safari parkovima?", correct: "Kenija", wrong: ["Tanzanija", "Bocvana", "Namibija", "Zimbabve", "Zambia"] }
    }
  },
  {
    id: "af-19",
    translations: {
      sr: { language: "sr", continent: "Afrika", question: "Kako se zove veliko jezero u Africi koje često menja svoju veličinu?", correct: "Čadsko jezero", wrong: ["Viktoriino jezero", "Tanganjika", "Malavi", "Turkana", "Albert"] },
      en: { language: "en", continent: "Africa", question: "Kako se zove veliko jezero u Africi koje često menja svoju veličinu?", correct: "Čadsko jezero", wrong: ["Viktoriino jezero", "Tanganjika", "Malavi", "Turkana", "Albert"] },
      de: { language: "de", continent: "Afrika", question: "Kako se zove veliko jezero u Africi koje često menja svoju veličinu?", correct: "Čadsko jezero", wrong: ["Viktoriino jezero", "Tanganjika", "Malavi", "Turkana", "Albert"] },
      ru: { language: "ru", continent: "Африка", question: "Kako se zove veliko jezero u Africi koje često menja svoju veličinu?", correct: "Čadsko jezero", wrong: ["Viktoriino jezero", "Tanganjika", "Malavi", "Turkana", "Albert"] },
      zh: { language: "zh", continent: "非洲", question: "Kako se zove veliko jezero u Africi koje često menja svoju veličinu?", correct: "Čadsko jezero", wrong: ["Viktoriino jezero", "Tanganjika", "Malavi", "Turkana", "Albert"] },
      et: { language: "et", continent: "Aafrika", question: "Kako se zove veliko jezero u Africi koje često menja svoju veličinu?", correct: "Čadsko jezero", wrong: ["Viktoriino jezero", "Tanganjika", "Malavi", "Turkana", "Albert"] }
    }
  },
  {
    id: "af-20",
    translations: {
      sr: { language: "sr", continent: "Afrika", question: "Kako se zove životinja poznata po tome što ima grbu i živi u pustinjama?", correct: "Kamila", wrong: ["Dromedар", "Lama", "Alpaka", "Gnus", "Oriks"] },
      en: { language: "en", continent: "Africa", question: "Kako se zove životinja poznata po tome što ima grbu i živi u pustinjama?", correct: "Kamila", wrong: ["Dromedар", "Lama", "Alpaka", "Gnus", "Oriks"] },
      de: { language: "de", continent: "Afrika", question: "Kako se zove životinja poznata po tome što ima grbu i živi u pustinjama?", correct: "Kamila", wrong: ["Dromedар", "Lama", "Alpaka", "Gnus", "Oriks"] },
      ru: { language: "ru", continent: "Африка", question: "Kako se zove životinja poznata po tome što ima grbu i živi u pustinjama?", correct: "Kamila", wrong: ["Dromedар", "Lama", "Alpaka", "Gnus", "Oriks"] },
      zh: { language: "zh", continent: "非洲", question: "Kako se zove životinja poznata po tome što ima grbu i živi u pustinjama?", correct: "Kamila", wrong: ["Dromedар", "Lama", "Alpaka", "Gnus", "Oriks"] },
      et: { language: "et", continent: "Aafrika", question: "Kako se zove životinja poznata po tome što ima grbu i živi u pustinjama?", correct: "Kamila", wrong: ["Dromedар", "Lama", "Alpaka", "Gnus", "Oriks"] }
    }
  },
  {
    id: "na-01",
    translations: {
      sr: { language: "sr", continent: "Severna Amerika", question: "Kako se zove arhipelag jugoistočno od SAD?", correct: "Karibi", wrong: ["Havaji", "Galapagos", "Bermuda", "Azori", "Kanarska ostrva"] },
      en: { language: "en", continent: "North America", question: "Kako se zove arhipelag jugoistočno od SAD?", correct: "Karibi", wrong: ["Havaji", "Galapagos", "Bermuda", "Azori", "Kanarska ostrva"] },
      de: { language: "de", continent: "Nordamerika", question: "Kako se zove arhipelag jugoistočno od SAD?", correct: "Karibi", wrong: ["Havaji", "Galapagos", "Bermuda", "Azori", "Kanarska ostrva"] },
      ru: { language: "ru", continent: "Северная Америка", question: "Kako se zove arhipelag jugoistočno od SAD?", correct: "Karibi", wrong: ["Havaji", "Galapagos", "Bermuda", "Azori", "Kanarska ostrva"] },
      zh: { language: "zh", continent: "北美洲", question: "Kako se zove arhipelag jugoistočno od SAD?", correct: "Karibi", wrong: ["Havaji", "Galapagos", "Bermuda", "Azori", "Kanarska ostrva"] },
      et: { language: "et", continent: "Põhja-Ameerika", question: "Kako se zove arhipelag jugoistočno od SAD?", correct: "Karibi", wrong: ["Havaji", "Galapagos", "Bermuda", "Azori", "Kanarska ostrva"] }
    }
  },
  {
    id: "na-02",
    translations: {
      sr: { language: "sr", continent: "Severna Amerika", question: "Koje je najveće poluostrvo Severne Amerike?", correct: "Labrador", wrong: ["Jukatansko poluostrvo", "Baha Kalifornija", "Aljaska", "Florida", "Nova Škotska"] },
      en: { language: "en", continent: "North America", question: "Koje je najveće poluostrvo Severne Amerike?", correct: "Labrador", wrong: ["Jukatansko poluostrvo", "Baha Kalifornija", "Aljaska", "Florida", "Nova Škotska"] },
      de: { language: "de", continent: "Nordamerika", question: "Koje je najveće poluostrvo Severne Amerike?", correct: "Labrador", wrong: ["Jukatansko poluostrvo", "Baha Kalifornija", "Aljaska", "Florida", "Nova Škotska"] },
      ru: { language: "ru", continent: "Северная Америка", question: "Koje je najveće poluostrvo Severne Amerike?", correct: "Labrador", wrong: ["Jukatansko poluostrvo", "Baha Kalifornija", "Aljaska", "Florida", "Nova Škotska"] },
      zh: { language: "zh", continent: "北美洲", question: "Koje je najveće poluostrvo Severne Amerike?", correct: "Labrador", wrong: ["Jukatansko poluostrvo", "Baha Kalifornija", "Aljaska", "Florida", "Nova Škotska"] },
      et: { language: "et", continent: "Põhja-Ameerika", question: "Koje je najveće poluostrvo Severne Amerike?", correct: "Labrador", wrong: ["Jukatansko poluostrvo", "Baha Kalifornija", "Aljaska", "Florida", "Nova Škotska"] }
    }
  },
  {
    id: "na-03",
    translations: {
      sr: { language: "sr", continent: "Severna Amerika", question: "Koja je najduža reka Severne Amerike?", correct: "Misuri", wrong: ["Misisipi", "Kolorado", "Rio Grande", "Jukon", "Kolumbija"] },
      en: { language: "en", continent: "North America", question: "Koja je najduža reka Severne Amerike?", correct: "Misuri", wrong: ["Misisipi", "Kolorado", "Rio Grande", "Jukon", "Kolumbija"] },
      de: { language: "de", continent: "Nordamerika", question: "Koja je najduža reka Severne Amerike?", correct: "Misuri", wrong: ["Misisipi", "Kolorado", "Rio Grande", "Jukon", "Kolumbija"] },
      ru: { language: "ru", continent: "Северная Америка", question: "Koja je najduža reka Severne Amerike?", correct: "Misuri", wrong: ["Misisipi", "Kolorado", "Rio Grande", "Jukon", "Kolumbija"] },
      zh: { language: "zh", continent: "北美洲", question: "Koja je najduža reka Severne Amerike?", correct: "Misuri", wrong: ["Misisipi", "Kolorado", "Rio Grande", "Jukon", "Kolumbija"] },
      et: { language: "et", continent: "Põhja-Ameerika", question: "Koja je najduža reka Severne Amerike?", correct: "Misuri", wrong: ["Misisipi", "Kolorado", "Rio Grande", "Jukon", "Kolumbija"] }
    }
  },
  {
    id: "na-04",
    translations: {
      sr: { language: "sr", continent: "Severna Amerika", question: "Kako se zove najveće jezero Severne Amerike?", correct: "Gornje jezero", wrong: ["Mičigen", "Hjuron", "Iri", "Ontario", "Vinipeg"] },
      en: { language: "en", continent: "North America", question: "Kako se zove najveće jezero Severne Amerike?", correct: "Gornje jezero", wrong: ["Mičigen", "Hjuron", "Iri", "Ontario", "Vinipeg"] },
      de: { language: "de", continent: "Nordamerika", question: "Kako se zove najveće jezero Severne Amerike?", correct: "Gornje jezero", wrong: ["Mičigen", "Hjuron", "Iri", "Ontario", "Vinipeg"] },
      ru: { language: "ru", continent: "Северная Америка", question: "Kako se zove najveće jezero Severne Amerike?", correct: "Gornje jezero", wrong: ["Mičigen", "Hjuron", "Iri", "Ontario", "Vinipeg"] },
      zh: { language: "zh", continent: "北美洲", question: "Kako se zove najveće jezero Severne Amerike?", correct: "Gornje jezero", wrong: ["Mičigen", "Hjuron", "Iri", "Ontario", "Vinipeg"] },
      et: { language: "et", continent: "Põhja-Ameerika", question: "Kako se zove najveće jezero Severne Amerike?", correct: "Gornje jezero", wrong: ["Mičigen", "Hjuron", "Iri", "Ontario", "Vinipeg"] }
    }
  },
  {
    id: "na-05",
    translations: {
      sr: { language: "sr", continent: "Severna Amerika", question: "Koja planinska grupa se prostire zapadnim delom kontinenta?", correct: "Stjenovite planine", wrong: ["Apalači", "Sierra Nevada", "Kaskade", "Ozarks", "Plavi greben"] },
      en: { language: "en", continent: "North America", question: "Koja planinska grupa se prostire zapadnim delom kontinenta?", correct: "Stjenovite planine", wrong: ["Apalači", "Sierra Nevada", "Kaskade", "Ozarks", "Plavi greben"] },
      de: { language: "de", continent: "Nordamerika", question: "Koja planinska grupa se prostire zapadnim delom kontinenta?", correct: "Stjenovite planine", wrong: ["Apalači", "Sierra Nevada", "Kaskade", "Ozarks", "Plavi greben"] },
      ru: { language: "ru", continent: "Северная Америка", question: "Koja planinska grupa se prostire zapadnim delom kontinenta?", correct: "Stjenovite planine", wrong: ["Apalači", "Sierra Nevada", "Kaskade", "Ozarks", "Plavi greben"] },
      zh: { language: "zh", continent: "北美洲", question: "Koja planinska grupa se prostire zapadnim delom kontinenta?", correct: "Stjenovite planine", wrong: ["Apalači", "Sierra Nevada", "Kaskade", "Ozarks", "Plavi greben"] },
      et: { language: "et", continent: "Põhja-Ameerika", question: "Koja planinska grupa se prostire zapadnim delom kontinenta?", correct: "Stjenovite planine", wrong: ["Apalači", "Sierra Nevada", "Kaskade", "Ozarks", "Plavi greben"] }
    }
  },
  {
    id: "na-06",
    translations: {
      sr: { language: "sr", continent: "Severna Amerika", question: "Kako se zove najviši vrh Severne Amerike?", correct: "Denali (McKinley)", wrong: ["Logan", "Orizaba", "Sent Elajas", "Popokातepetl", "Viting"] },
      en: { language: "en", continent: "North America", question: "Kako se zove najviši vrh Severne Amerike?", correct: "Denali (McKinley)", wrong: ["Logan", "Orizaba", "Sent Elajas", "Popokातepetl", "Viting"] },
      de: { language: "de", continent: "Nordamerika", question: "Kako se zove najviši vrh Severne Amerike?", correct: "Denali (McKinley)", wrong: ["Logan", "Orizaba", "Sent Elajas", "Popokातepetl", "Viting"] },
      ru: { language: "ru", continent: "Северная Америка", question: "Kako se zove najviši vrh Severne Amerike?", correct: "Denali (McKinley)", wrong: ["Logan", "Orizaba", "Sent Elajas", "Popokातepetl", "Viting"] },
      zh: { language: "zh", continent: "北美洲", question: "Kako se zove najviši vrh Severne Amerike?", correct: "Denali (McKinley)", wrong: ["Logan", "Orizaba", "Sent Elajas", "Popokातepetl", "Viting"] },
      et: { language: "et", continent: "Põhja-Ameerika", question: "Kako se zove najviši vrh Severne Amerike?", correct: "Denali (McKinley)", wrong: ["Logan", "Orizaba", "Sent Elajas", "Popokातepetl", "Viting"] }
    }
  },
  {
    id: "na-07",
    translations: {
      sr: { language: "sr", continent: "Severna Amerika", question: "Kako se zove poznati vodopad na granici SAD i Kanade?", correct: "Nijagara", wrong: ["Anđelov vodopad", "Viktorija", "Iguazu", "Yellowstone", "Shoshone"] },
      en: { language: "en", continent: "North America", question: "Kako se zove poznati vodopad na granici SAD i Kanade?", correct: "Nijagara", wrong: ["Anđelov vodopad", "Viktorija", "Iguazu", "Yellowstone", "Shoshone"] },
      de: { language: "de", continent: "Nordamerika", question: "Kako se zove poznati vodopad na granici SAD i Kanade?", correct: "Nijagara", wrong: ["Anđelov vodopad", "Viktorija", "Iguazu", "Yellowstone", "Shoshone"] },
      ru: { language: "ru", continent: "Северная Америка", question: "Kako se zove poznati vodopad na granici SAD i Kanade?", correct: "Nijagara", wrong: ["Anđelov vodopad", "Viktorija", "Iguazu", "Yellowstone", "Shoshone"] },
      zh: { language: "zh", continent: "北美洲", question: "Kako se zove poznati vodopad na granici SAD i Kanade?", correct: "Nijagara", wrong: ["Anđelov vodopad", "Viktorija", "Iguazu", "Yellowstone", "Shoshone"] },
      et: { language: "et", continent: "Põhja-Ameerika", question: "Kako se zove poznati vodopad na granici SAD i Kanade?", correct: "Nijagara", wrong: ["Anđelov vodopad", "Viktorija", "Iguazu", "Yellowstone", "Shoshone"] }
    }
  },
  {
    id: "na-08",
    translations: {
      sr: { language: "sr", continent: "Severna Amerika", question: "Koja država Severne Amerike je poznata po piramidama Maja?", correct: "Meksiko", wrong: ["Gvatemala", "Belize", "Honduras", "El Salvador", "Nikaragva"] },
      en: { language: "en", continent: "North America", question: "Koja država Severne Amerike je poznata po piramidama Maja?", correct: "Meksiko", wrong: ["Gvatemala", "Belize", "Honduras", "El Salvador", "Nikaragva"] },
      de: { language: "de", continent: "Nordamerika", question: "Koja država Severne Amerike je poznata po piramidama Maja?", correct: "Meksiko", wrong: ["Gvatemala", "Belize", "Honduras", "El Salvador", "Nikaragva"] },
      ru: { language: "ru", continent: "Северная Америка", question: "Koja država Severne Amerike je poznata po piramidama Maja?", correct: "Meksiko", wrong: ["Gvatemala", "Belize", "Honduras", "El Salvador", "Nikaragva"] },
      zh: { language: "zh", continent: "北美洲", question: "Koja država Severne Amerike je poznata po piramidama Maja?", correct: "Meksiko", wrong: ["Gvatemala", "Belize", "Honduras", "El Salvador", "Nikaragva"] },
      et: { language: "et", continent: "Põhja-Ameerika", question: "Koja država Severne Amerike je poznata po piramidama Maja?", correct: "Meksiko", wrong: ["Gvatemala", "Belize", "Honduras", "El Salvador", "Nikaragva"] }
    }
  },
  {
    id: "na-09",
    translations: {
      sr: { language: "sr", continent: "Severna Amerika", question: "Od koliko država se sastoji SAD?", correct: "50", wrong: ["48", "49", "51", "52", "46"] },
      en: { language: "en", continent: "North America", question: "Od koliko država se sastoji SAD?", correct: "50", wrong: ["48", "49", "51", "52", "46"] },
      de: { language: "de", continent: "Nordamerika", question: "Od koliko država se sastoji SAD?", correct: "50", wrong: ["48", "49", "51", "52", "46"] },
      ru: { language: "ru", continent: "Северная Америка", question: "Od koliko država se sastoji SAD?", correct: "50", wrong: ["48", "49", "51", "52", "46"] },
      zh: { language: "zh", continent: "北美洲", question: "Od koliko država se sastoji SAD?", correct: "50", wrong: ["48", "49", "51", "52", "46"] },
      et: { language: "et", continent: "Põhja-Ameerika", question: "Od koliko država se sastoji SAD?", correct: "50", wrong: ["48", "49", "51", "52", "46"] }
    }
  },
  {
    id: "na-10",
    translations: {
      sr: { language: "sr", continent: "Severna Amerika", question: "U kom gradu se nalazi Kip slobode?", correct: "Njujork", wrong: ["Vašington", "Boston", "Filadelfija", "Čikago", "Los Anđeles"] },
      en: { language: "en", continent: "North America", question: "U kom gradu se nalazi Kip slobode?", correct: "Njujork", wrong: ["Vašington", "Boston", "Filadelfija", "Čikago", "Los Anđeles"] },
      de: { language: "de", continent: "Nordamerika", question: "U kom gradu se nalazi Kip slobode?", correct: "Njujork", wrong: ["Vašington", "Boston", "Filadelfija", "Čikago", "Los Anđeles"] },
      ru: { language: "ru", continent: "Северная Америка", question: "U kom gradu se nalazi Kip slobode?", correct: "Njujork", wrong: ["Vašington", "Boston", "Filadelfija", "Čikago", "Los Anđeles"] },
      zh: { language: "zh", continent: "北美洲", question: "U kom gradu se nalazi Kip slobode?", correct: "Njujork", wrong: ["Vašington", "Boston", "Filadelfija", "Čikago", "Los Anđeles"] },
      et: { language: "et", continent: "Põhja-Ameerika", question: "U kom gradu se nalazi Kip slobode?", correct: "Njujork", wrong: ["Vašington", "Boston", "Filadelfija", "Čikago", "Los Anđeles"] }
    }
  },
  {
    id: "na-11",
    translations: {
      sr: { language: "sr", continent: "Severna Amerika", question: "Kako se zove poznati kanjon u SAD, jedan od najvećih na svetu?", correct: "Veliki kanjon", wrong: ["Brais kanjon", "Zion kanjon", "Antilopa kanjon", "Kolumbija klisura", "Kanjon Čeli"] },
      en: { language: "en", continent: "North America", question: "Kako se zove poznati kanjon u SAD, jedan od najvećih na svetu?", correct: "Veliki kanjon", wrong: ["Brais kanjon", "Zion kanjon", "Antilopa kanjon", "Kolumbija klisura", "Kanjon Čeli"] },
      de: { language: "de", continent: "Nordamerika", question: "Kako se zove poznati kanjon u SAD, jedan od najvećih na svetu?", correct: "Veliki kanjon", wrong: ["Brais kanjon", "Zion kanjon", "Antilopa kanjon", "Kolumbija klisura", "Kanjon Čeli"] },
      ru: { language: "ru", continent: "Северная Америка", question: "Kako se zove poznati kanjon u SAD, jedan od najvećih na svetu?", correct: "Veliki kanjon", wrong: ["Brais kanjon", "Zion kanjon", "Antilopa kanjon", "Kolumbija klisura", "Kanjon Čeli"] },
      zh: { language: "zh", continent: "北美洲", question: "Kako se zove poznati kanjon u SAD, jedan od najvećih na svetu?", correct: "Veliki kanjon", wrong: ["Brais kanjon", "Zion kanjon", "Antilopa kanjon", "Kolumbija klisura", "Kanjon Čeli"] },
      et: { language: "et", continent: "Põhja-Ameerika", question: "Kako se zove poznati kanjon u SAD, jedan od najvećih na svetu?", correct: "Veliki kanjon", wrong: ["Brais kanjon", "Zion kanjon", "Antilopa kanjon", "Kolumbija klisura", "Kanjon Čeli"] }
    }
  },
  {
    id: "na-12",
    translations: {
      sr: { language: "sr", continent: "Severna Amerika", question: "U kojoj saveznoj državi SAD se nalazi Holivud?", correct: "Kalifornija", wrong: ["Nevada", "Teksas", "Njujork", "Florida", "Džordžija"] },
      en: { language: "en", continent: "North America", question: "U kojoj saveznoj državi SAD se nalazi Holivud?", correct: "Kalifornija", wrong: ["Nevada", "Teksas", "Njujork", "Florida", "Džordžija"] },
      de: { language: "de", continent: "Nordamerika", question: "U kojoj saveznoj državi SAD se nalazi Holivud?", correct: "Kalifornija", wrong: ["Nevada", "Teksas", "Njujork", "Florida", "Džordžija"] },
      ru: { language: "ru", continent: "Северная Америка", question: "U kojoj saveznoj državi SAD se nalazi Holivud?", correct: "Kalifornija", wrong: ["Nevada", "Teksas", "Njujork", "Florida", "Džordžija"] },
      zh: { language: "zh", continent: "北美洲", question: "U kojoj saveznoj državi SAD se nalazi Holivud?", correct: "Kalifornija", wrong: ["Nevada", "Teksas", "Njujork", "Florida", "Džordžija"] },
      et: { language: "et", continent: "Põhja-Ameerika", question: "U kojoj saveznoj državi SAD se nalazi Holivud?", correct: "Kalifornija", wrong: ["Nevada", "Teksas", "Njujork", "Florida", "Džordžija"] }
    }
  },
  {
    id: "na-13",
    translations: {
      sr: { language: "sr", continent: "Severna Amerika", question: "Koja država je poznata po hokeju na ledu i javorovom listu na zastavi?", correct: "Kanada", wrong: ["SAD", "Rusija", "Finska", "Švedska", "Norveška"] },
      en: { language: "en", continent: "North America", question: "Koja država je poznata po hokeju na ledu i javorovom listu na zastavi?", correct: "Kanada", wrong: ["SAD", "Rusija", "Finska", "Švedska", "Norveška"] },
      de: { language: "de", continent: "Nordamerika", question: "Koja država je poznata po hokeju na ledu i javorovom listu na zastavi?", correct: "Kanada", wrong: ["SAD", "Rusija", "Finska", "Švedska", "Norveška"] },
      ru: { language: "ru", continent: "Северная Америка", question: "Koja država je poznata po hokeju na ledu i javorovom listu na zastavi?", correct: "Kanada", wrong: ["SAD", "Rusija", "Finska", "Švedska", "Norveška"] },
      zh: { language: "zh", continent: "北美洲", question: "Koja država je poznata po hokeju na ledu i javorovom listu na zastavi?", correct: "Kanada", wrong: ["SAD", "Rusija", "Finska", "Švedska", "Norveška"] },
      et: { language: "et", continent: "Põhja-Ameerika", question: "Koja država je poznata po hokeju na ledu i javorovom listu na zastavi?", correct: "Kanada", wrong: ["SAD", "Rusija", "Finska", "Švedska", "Norveška"] }
    }
  },
  {
    id: "na-14",
    translations: {
      sr: { language: "sr", continent: "Severna Amerika", question: "Koja američka država je poznata po rodeu i kaubojima?", correct: "Teksas", wrong: ["Vajoming", "Montana", "Kolorado", "Nevada", "Oklahoma"] },
      en: { language: "en", continent: "North America", question: "Koja američka država je poznata po rodeu i kaubojima?", correct: "Teksas", wrong: ["Vajoming", "Montana", "Kolorado", "Nevada", "Oklahoma"] },
      de: { language: "de", continent: "Nordamerika", question: "Koja američka država je poznata po rodeu i kaubojima?", correct: "Teksas", wrong: ["Vajoming", "Montana", "Kolorado", "Nevada", "Oklahoma"] },
      ru: { language: "ru", continent: "Северная Америка", question: "Koja američka država je poznata po rodeu i kaubojima?", correct: "Teksas", wrong: ["Vajoming", "Montana", "Kolorado", "Nevada", "Oklahoma"] },
      zh: { language: "zh", continent: "北美洲", question: "Koja američka država je poznata po rodeu i kaubojima?", correct: "Teksas", wrong: ["Vajoming", "Montana", "Kolorado", "Nevada", "Oklahoma"] },
      et: { language: "et", continent: "Põhja-Ameerika", question: "Koja američka država je poznata po rodeu i kaubojima?", correct: "Teksas", wrong: ["Vajoming", "Montana", "Kolorado", "Nevada", "Oklahoma"] }
    }
  },
  {
    id: "na-15",
    translations: {
      sr: { language: "sr", continent: "Severna Amerika", question: "Koje tri države čine Severnu Ameriku?", correct: "SAD, Kanada, Meksiko", wrong: ["SAD", "Kanada", "Kuba", "SAD", "Meksiko", "Gvatemala", "Kanada", "SAD", "Panama", "SAD", "Kanada", "Portoriko", "Meksiko", "SAD", "Belize"] },
      en: { language: "en", continent: "North America", question: "Koje tri države čine Severnu Ameriku?", correct: "SAD, Kanada, Meksiko", wrong: ["SAD", "Kanada", "Kuba", "SAD", "Meksiko", "Gvatemala", "Kanada", "SAD", "Panama", "SAD", "Kanada", "Portoriko", "Meksiko", "SAD", "Belize"] },
      de: { language: "de", continent: "Nordamerika", question: "Koje tri države čine Severnu Ameriku?", correct: "SAD, Kanada, Meksiko", wrong: ["SAD", "Kanada", "Kuba", "SAD", "Meksiko", "Gvatemala", "Kanada", "SAD", "Panama", "SAD", "Kanada", "Portoriko", "Meksiko", "SAD", "Belize"] },
      ru: { language: "ru", continent: "Северная Америка", question: "Koje tri države čine Severnu Ameriku?", correct: "SAD, Kanada, Meksiko", wrong: ["SAD", "Kanada", "Kuba", "SAD", "Meksiko", "Gvatemala", "Kanada", "SAD", "Panama", "SAD", "Kanada", "Portoriko", "Meksiko", "SAD", "Belize"] },
      zh: { language: "zh", continent: "北美洲", question: "Koje tri države čine Severnu Ameriku?", correct: "SAD, Kanada, Meksiko", wrong: ["SAD", "Kanada", "Kuba", "SAD", "Meksiko", "Gvatemala", "Kanada", "SAD", "Panama", "SAD", "Kanada", "Portoriko", "Meksiko", "SAD", "Belize"] },
      et: { language: "et", continent: "Põhja-Ameerika", question: "Koje tri države čine Severnu Ameriku?", correct: "SAD, Kanada, Meksiko", wrong: ["SAD", "Kanada", "Kuba", "SAD", "Meksiko", "Gvatemala", "Kanada", "SAD", "Panama", "SAD", "Kanada", "Portoriko", "Meksiko", "SAD", "Belize"] }
    }
  },
  {
    id: "na-16",
    translations: {
      sr: { language: "sr", continent: "Severna Amerika", question: "Kako se zove jedno od 5 Velikih jezera SAD?", correct: "Mičigen", wrong: ["Vašington", "Heron", "Superior", "Viktorija", "Ladoga"] },
      en: { language: "en", continent: "North America", question: "Kako se zove jedno od 5 Velikih jezera SAD?", correct: "Mičigen", wrong: ["Vašington", "Heron", "Superior", "Viktorija", "Ladoga"] },
      de: { language: "de", continent: "Nordamerika", question: "Kako se zove jedno od 5 Velikih jezera SAD?", correct: "Mičigen", wrong: ["Vašington", "Heron", "Superior", "Viktorija", "Ladoga"] },
      ru: { language: "ru", continent: "Северная Америка", question: "Kako se zove jedno od 5 Velikih jezera SAD?", correct: "Mičigen", wrong: ["Vašington", "Heron", "Superior", "Viktorija", "Ladoga"] },
      zh: { language: "zh", continent: "北美洲", question: "Kako se zove jedno od 5 Velikih jezera SAD?", correct: "Mičigen", wrong: ["Vašington", "Heron", "Superior", "Viktorija", "Ladoga"] },
      et: { language: "et", continent: "Põhja-Ameerika", question: "Kako se zove jedno od 5 Velikih jezera SAD?", correct: "Mičigen", wrong: ["Vašington", "Heron", "Superior", "Viktorija", "Ladoga"] }
    }
  },
  {
    id: "na-17",
    translations: {
      sr: { language: "sr", continent: "Severna Amerika", question: "Kojoj državi pripada Aljaska?", correct: "SAD", wrong: ["Kanada", "Rusija", "Grenland", "Danska", "Norveška"] },
      en: { language: "en", continent: "North America", question: "Kojoj državi pripada Aljaska?", correct: "SAD", wrong: ["Kanada", "Rusija", "Grenland", "Danska", "Norveška"] },
      de: { language: "de", continent: "Nordamerika", question: "Kojoj državi pripada Aljaska?", correct: "SAD", wrong: ["Kanada", "Rusija", "Grenland", "Danska", "Norveška"] },
      ru: { language: "ru", continent: "Северная Америка", question: "Kojoj državi pripada Aljaska?", correct: "SAD", wrong: ["Kanada", "Rusija", "Grenland", "Danska", "Norveška"] },
      zh: { language: "zh", continent: "北美洲", question: "Kojoj državi pripada Aljaska?", correct: "SAD", wrong: ["Kanada", "Rusija", "Grenland", "Danska", "Norveška"] },
      et: { language: "et", continent: "Põhja-Ameerika", question: "Kojoj državi pripada Aljaska?", correct: "SAD", wrong: ["Kanada", "Rusija", "Grenland", "Danska", "Norveška"] }
    }
  },
  {
    id: "na-18",
    translations: {
      sr: { language: "sr", continent: "Severna Amerika", question: "Po kome je američki kontinent dobio ime?", correct: "Amerigo Vespuči", wrong: ["Kristifer Kolumbo", "Ferdinand Mageljan", "Džon Kabot", "Hernan Kortes", "Vasco da Gama"] },
      en: { language: "en", continent: "North America", question: "Po kome je američki kontinent dobio ime?", correct: "Amerigo Vespuči", wrong: ["Kristifer Kolumbo", "Ferdinand Mageljan", "Džon Kabot", "Hernan Kortes", "Vasco da Gama"] },
      de: { language: "de", continent: "Nordamerika", question: "Po kome je američki kontinent dobio ime?", correct: "Amerigo Vespuči", wrong: ["Kristifer Kolumbo", "Ferdinand Mageljan", "Džon Kabot", "Hernan Kortes", "Vasco da Gama"] },
      ru: { language: "ru", continent: "Северная Америка", question: "Po kome je američki kontinent dobio ime?", correct: "Amerigo Vespuči", wrong: ["Kristifer Kolumbo", "Ferdinand Mageljan", "Džon Kabot", "Hernan Kortes", "Vasco da Gama"] },
      zh: { language: "zh", continent: "北美洲", question: "Po kome je američki kontinent dobio ime?", correct: "Amerigo Vespuči", wrong: ["Kristifer Kolumbo", "Ferdinand Mageljan", "Džon Kabot", "Hernan Kortes", "Vasco da Gama"] },
      et: { language: "et", continent: "Põhja-Ameerika", question: "Po kome je američki kontinent dobio ime?", correct: "Amerigo Vespuči", wrong: ["Kristifer Kolumbo", "Ferdinand Mageljan", "Džon Kabot", "Hernan Kortes", "Vasco da Gama"] }
    }
  },
  {
    id: "na-19",
    translations: {
      sr: { language: "sr", continent: "Severna Amerika", question: "Koji je glavni grad Meksika?", correct: "Meksiko Siti", wrong: ["Gvadalahara", "Monterej", "Puebla", "Tijuana", "Kankun"] },
      en: { language: "en", continent: "North America", question: "Koji je glavni grad Meksika?", correct: "Meksiko Siti", wrong: ["Gvadalahara", "Monterej", "Puebla", "Tijuana", "Kankun"] },
      de: { language: "de", continent: "Nordamerika", question: "Koji je glavni grad Meksika?", correct: "Meksiko Siti", wrong: ["Gvadalahara", "Monterej", "Puebla", "Tijuana", "Kankun"] },
      ru: { language: "ru", continent: "Северная Америка", question: "Koji je glavni grad Meksika?", correct: "Meksiko Siti", wrong: ["Gvadalahara", "Monterej", "Puebla", "Tijuana", "Kankun"] },
      zh: { language: "zh", continent: "北美洲", question: "Koji je glavni grad Meksika?", correct: "Meksiko Siti", wrong: ["Gvadalahara", "Monterej", "Puebla", "Tijuana", "Kankun"] },
      et: { language: "et", continent: "Põhja-Ameerika", question: "Koji je glavni grad Meksika?", correct: "Meksiko Siti", wrong: ["Gvadalahara", "Monterej", "Puebla", "Tijuana", "Kankun"] }
    }
  },
  {
    id: "na-20",
    translations: {
      sr: { language: "sr", continent: "Severna Amerika", question: "Koji je glavni grad Kanade?", correct: "Otava", wrong: ["Toronto", "Vankuver", "Monreal", "Kalgari", "Edmonton"] },
      en: { language: "en", continent: "North America", question: "Koji je glavni grad Kanade?", correct: "Otava", wrong: ["Toronto", "Vankuver", "Monreal", "Kalgari", "Edmonton"] },
      de: { language: "de", continent: "Nordamerika", question: "Koji je glavni grad Kanade?", correct: "Otava", wrong: ["Toronto", "Vankuver", "Monreal", "Kalgari", "Edmonton"] },
      ru: { language: "ru", continent: "Северная Америка", question: "Koji je glavni grad Kanade?", correct: "Otava", wrong: ["Toronto", "Vankuver", "Monreal", "Kalgari", "Edmonton"] },
      zh: { language: "zh", continent: "北美洲", question: "Koji je glavni grad Kanade?", correct: "Otava", wrong: ["Toronto", "Vankuver", "Monreal", "Kalgari", "Edmonton"] },
      et: { language: "et", continent: "Põhja-Ameerika", question: "Koji je glavni grad Kanade?", correct: "Otava", wrong: ["Toronto", "Vankuver", "Monreal", "Kalgari", "Edmonton"] }
    }
  },
  {
    id: "sa-01",
    translations: {
      sr: { language: "sr", continent: "Južna Amerika", question: "Koja je najveća država Južne Amerike po površini?", correct: "Brazil", wrong: ["Argentina", "Peru", "Kolumbija", "Venecuela", "Bolivija"] },
      en: { language: "en", continent: "South America", question: "Koja je najveća država Južne Amerike po površini?", correct: "Brazil", wrong: ["Argentina", "Peru", "Kolumbija", "Venecuela", "Bolivija"] },
      de: { language: "de", continent: "Südamerika", question: "Koja je najveća država Južne Amerike po površini?", correct: "Brazil", wrong: ["Argentina", "Peru", "Kolumbija", "Venecuela", "Bolivija"] },
      ru: { language: "ru", continent: "Южная Аmerika", question: "Koja je najveća država Južne Amerike po površini?", correct: "Brazil", wrong: ["Argentina", "Peru", "Kolumbija", "Venecuela", "Bolivija"] },
      zh: { language: "zh", continent: "南美洲", question: "Koja je najveća država Južne Amerike po površini?", correct: "Brazil", wrong: ["Argentina", "Peru", "Kolumbija", "Venecuela", "Bolivija"] },
      et: { language: "et", continent: "Lõuna-Ameerika", question: "Koja je najveća država Južne Amerike po površini?", correct: "Brazil", wrong: ["Argentina", "Peru", "Kolumbija", "Venecuela", "Bolivija"] }
    }
  },
  {
    id: "sa-02",
    translations: {
      sr: { language: "sr", continent: "Južna Amerika", question: "Kako se zove najduža reka Južne Amerike?", correct: "Amazon", wrong: ["Parana", "Orinoko", "Sao Francisko", "Urugvaj", "Madeira"] },
      en: { language: "en", continent: "South America", question: "Kako se zove najduža reka Južne Amerike?", correct: "Amazon", wrong: ["Parana", "Orinoko", "Sao Francisko", "Urugvaj", "Madeira"] },
      de: { language: "de", continent: "Südamerika", question: "Kako se zove najduža reka Južne Amerike?", correct: "Amazon", wrong: ["Parana", "Orinoko", "Sao Francisko", "Urugvaj", "Madeira"] },
      ru: { language: "ru", continent: "Южная Аmerika", question: "Kako se zove najduža reka Južne Amerike?", correct: "Amazon", wrong: ["Parana", "Orinoko", "Sao Francisko", "Urugvaj", "Madeira"] },
      zh: { language: "zh", continent: "南美洲", question: "Kako se zove najduža reka Južne Amerike?", correct: "Amazon", wrong: ["Parana", "Orinoko", "Sao Francisko", "Urugvaj", "Madeira"] },
      et: { language: "et", continent: "Lõuna-Ameerika", question: "Kako se zove najduža reka Južne Amerike?", correct: "Amazon", wrong: ["Parana", "Orinoko", "Sao Francisko", "Urugvaj", "Madeira"] }
    }
  },
  {
    id: "sa-03",
    translations: {
      sr: { language: "sr", continent: "Južna Amerika", question: "Koja država Južne Amerike je poznata po govedini i asadu?", correct: "Argentina", wrong: ["Brazil", "Urugvaj", "Čile", "Paragvaj", "Bolivija"] },
      en: { language: "en", continent: "South America", question: "Koja država Južne Amerike je poznata po govedini i asadu?", correct: "Argentina", wrong: ["Brazil", "Urugvaj", "Čile", "Paragvaj", "Bolivija"] },
      de: { language: "de", continent: "Südamerika", question: "Koja država Južne Amerike je poznata po govedini i asadu?", correct: "Argentina", wrong: ["Brazil", "Urugvaj", "Čile", "Paragvaj", "Bolivija"] },
      ru: { language: "ru", continent: "Южная Аmerika", question: "Koja država Južne Amerike je poznata po govedini i asadu?", correct: "Argentina", wrong: ["Brazil", "Urugvaj", "Čile", "Paragvaj", "Bolivija"] },
      zh: { language: "zh", continent: "南美洲", question: "Koja država Južne Amerike je poznata po govedini i asadu?", correct: "Argentina", wrong: ["Brazil", "Urugvaj", "Čile", "Paragvaj", "Bolivija"] },
      et: { language: "et", continent: "Lõuna-Ameerika", question: "Koja država Južne Amerike je poznata po govedini i asadu?", correct: "Argentina", wrong: ["Brazil", "Urugvaj", "Čile", "Paragvaj", "Bolivija"] }
    }
  },
  {
    id: "sa-04",
    translations: {
      sr: { language: "sr", continent: "Južna Amerika", question: "Koji je najviši planinski vrh Južne Amerike?", correct: "Akonkagva", wrong: ["Ojos del Salado", "Monte Pissis", "Huascarán", "Llullaillaco", "Mercedario"] },
      en: { language: "en", continent: "South America", question: "Koji je najviši planinski vrh Južne Amerike?", correct: "Akonkagva", wrong: ["Ojos del Salado", "Monte Pissis", "Huascarán", "Llullaillaco", "Mercedario"] },
      de: { language: "de", continent: "Südamerika", question: "Koji je najviši planinski vrh Južne Amerike?", correct: "Akonkagva", wrong: ["Ojos del Salado", "Monte Pissis", "Huascarán", "Llullaillaco", "Mercedario"] },
      ru: { language: "ru", continent: "Южная Аmerika", question: "Koji je najviši planinski vrh Južne Amerike?", correct: "Akonkagva", wrong: ["Ojos del Salado", "Monte Pissis", "Huascarán", "Llullaillaco", "Mercedario"] },
      zh: { language: "zh", continent: "南美洲", question: "Koji je najviši planinski vrh Južne Amerike?", correct: "Akonkagva", wrong: ["Ojos del Salado", "Monte Pissis", "Huascarán", "Llullaillaco", "Mercedario"] },
      et: { language: "et", continent: "Lõuna-Ameerika", question: "Koji je najviši planinski vrh Južne Amerike?", correct: "Akonkagva", wrong: ["Ojos del Salado", "Monte Pissis", "Huascarán", "Llullaillaco", "Mercedario"] }
    }
  },
  {
    id: "sa-05",
    translations: {
      sr: { language: "sr", continent: "Južna Amerika", question: "Kako se zove najduži planinski lanac u Južnoj Americi?", correct: "Andi", wrong: ["Stjenovite planine", "Himalaji", "Alpi", "Veliki razvođe", "Atlas"] },
      en: { language: "en", continent: "South America", question: "Kako se zove najduži planinski lanac u Južnoj Americi?", correct: "Andi", wrong: ["Stjenovite planine", "Himalaji", "Alpi", "Veliki razvođe", "Atlas"] },
      de: { language: "de", continent: "Südamerika", question: "Kako se zove najduži planinski lanac u Južnoj Americi?", correct: "Andi", wrong: ["Stjenovite planine", "Himalaji", "Alpi", "Veliki razvođe", "Atlas"] },
      ru: { language: "ru", continent: "Южная Аmerika", question: "Kako se zove najduži planinski lanac u Južnoj Americi?", correct: "Andi", wrong: ["Stjenovite planine", "Himalaji", "Alpi", "Veliki razvođe", "Atlas"] },
      zh: { language: "zh", continent: "南美洲", question: "Kako se zove najduži planinski lanac u Južnoj Americi?", correct: "Andi", wrong: ["Stjenovite planine", "Himalaji", "Alpi", "Veliki razvođe", "Atlas"] },
      et: { language: "et", continent: "Lõuna-Ameerika", question: "Kako se zove najduži planinski lanac u Južnoj Americi?", correct: "Andi", wrong: ["Stjenovite planine", "Himalaji", "Alpi", "Veliki razvođe", "Atlas"] }
    }
  },
  {
    id: "sa-06",
    translations: {
      sr: { language: "sr", continent: "Južna Amerika", question: "Kako se zove najveća prašuma u Južnoj Americi?", correct: "Amazonija", wrong: ["Kongoska prašuma", "Daintree", "Valdivijska prašuma", "Pantanal", "Cerrado"] },
      en: { language: "en", continent: "South America", question: "Kako se zove najveća prašuma u Južnoj Americi?", correct: "Amazonija", wrong: ["Kongoska prašuma", "Daintree", "Valdivijska prašuma", "Pantanal", "Cerrado"] },
      de: { language: "de", continent: "Südamerika", question: "Kako se zove najveća prašuma u Južnoj Americi?", correct: "Amazonija", wrong: ["Kongoska prašuma", "Daintree", "Valdivijska prašuma", "Pantanal", "Cerrado"] },
      ru: { language: "ru", continent: "Южная Аmerika", question: "Kako se zove najveća prašuma u Južnoj Americi?", correct: "Amazonija", wrong: ["Kongoska prašuma", "Daintree", "Valdivijska prašuma", "Pantanal", "Cerrado"] },
      zh: { language: "zh", continent: "南美洲", question: "Kako se zove najveća prašuma u Južnoj Americi?", correct: "Amazonija", wrong: ["Kongoska prašuma", "Daintree", "Valdivijska prašuma", "Pantanal", "Cerrado"] },
      et: { language: "et", continent: "Lõuna-Ameerika", question: "Kako se zove najveća prašuma u Južnoj Americi?", correct: "Amazonija", wrong: ["Kongoska prašuma", "Daintree", "Valdivijska prašuma", "Pantanal", "Cerrado"] }
    }
  },
  {
    id: "sa-07",
    translations: {
      sr: { language: "sr", continent: "Južna Amerika", question: "Koja pustinja u Južnoj Americi važi za jednu od najsuvljih na svetu?", correct: "Atacama", wrong: ["Patagonijska pustinja", "Sečura pustinja", "Monte pustinja", "Pampa", "Gran Čako"] },
      en: { language: "en", continent: "South America", question: "Koja pustinja u Južnoj Americi važi za jednu od najsuvljih na svetu?", correct: "Atacama", wrong: ["Patagonijska pustinja", "Sečura pustinja", "Monte pustinja", "Pampa", "Gran Čako"] },
      de: { language: "de", continent: "Südamerika", question: "Koja pustinja u Južnoj Americi važi za jednu od najsuvljih na svetu?", correct: "Atacama", wrong: ["Patagonijska pustinja", "Sečura pustinja", "Monte pustinja", "Pampa", "Gran Čako"] },
      ru: { language: "ru", continent: "Южная Аmerika", question: "Koja pustinja u Južnoj Americi važi za jednu od najsuvljih na svetu?", correct: "Atacama", wrong: ["Patagonijska pustinja", "Sečura pustinja", "Monte pustinja", "Pampa", "Gran Čako"] },
      zh: { language: "zh", continent: "南美洲", question: "Koja pustinja u Južnoj Americi važi za jednu od najsuvljih na svetu?", correct: "Atacama", wrong: ["Patagonijska pustinja", "Sečura pustinja", "Monte pustinja", "Pampa", "Gran Čako"] },
      et: { language: "et", continent: "Lõuna-Ameerika", question: "Koja pustinja u Južnoj Americi važi za jednu od najsuvljih na svetu?", correct: "Atacama", wrong: ["Patagonijska pustinja", "Sečura pustinja", "Monte pustinja", "Pampa", "Gran Čako"] }
    }
  },
  {
    id: "sa-08",
    translations: {
      sr: { language: "sr", continent: "Južna Amerika", question: "Koji okean zapljuskuje zapadnu obalu Južne Amerike?", correct: "Tihi okean", wrong: ["Atlantski okean", "Indijski okean", "Južni okean", "Arktički okean", "Karipsko more"] },
      en: { language: "en", continent: "South America", question: "Koji okean zapljuskuje zapadnu obalu Južne Amerike?", correct: "Tihi okean", wrong: ["Atlantski okean", "Indijski okean", "Južni okean", "Arktički okean", "Karipsko more"] },
      de: { language: "de", continent: "Südamerika", question: "Koji okean zapljuskuje zapadnu obalu Južne Amerike?", correct: "Tihi okean", wrong: ["Atlantski okean", "Indijski okean", "Južni okean", "Arktički okean", "Karipsko more"] },
      ru: { language: "ru", continent: "Южная Аmerika", question: "Koji okean zapljuskuje zapadnu obalu Južne Amerike?", correct: "Tihi okean", wrong: ["Atlantski okean", "Indijski okean", "Južni okean", "Arktički okean", "Karipsko more"] },
      zh: { language: "zh", continent: "南美洲", question: "Koji okean zapljuskuje zapadnu obalu Južne Amerike?", correct: "Tihi okean", wrong: ["Atlantski okean", "Indijski okean", "Južni okean", "Arktički okean", "Karipsko more"] },
      et: { language: "et", continent: "Lõuna-Ameerika", question: "Koji okean zapljuskuje zapadnu obalu Južne Amerike?", correct: "Tihi okean", wrong: ["Atlantski okean", "Indijski okean", "Južni okean", "Arktički okean", "Karipsko more"] }
    }
  },
  {
    id: "sa-09",
    translations: {
      sr: { language: "sr", continent: "Južna Amerika", question: "Kako se zove poznati vodopad u Južnoj Americi?", correct: "Anđelov vodopad", wrong: ["Iguazu", "Niagara", "Viktorija", "Kaieteur", "Tugela"] },
      en: { language: "en", continent: "South America", question: "Kako se zove poznati vodopad u Južnoj Americi?", correct: "Anđelov vodopad", wrong: ["Iguazu", "Niagara", "Viktorija", "Kaieteur", "Tugela"] },
      de: { language: "de", continent: "Südamerika", question: "Kako se zove poznati vodopad u Južnoj Americi?", correct: "Anđelov vodopad", wrong: ["Iguazu", "Niagara", "Viktorija", "Kaieteur", "Tugela"] },
      ru: { language: "ru", continent: "Южная Аmerika", question: "Kako se zove poznati vodopad u Južnoj Americi?", correct: "Anđelov vodopad", wrong: ["Iguazu", "Niagara", "Viktorija", "Kaieteur", "Tugela"] },
      zh: { language: "zh", continent: "南美洲", question: "Kako se zove poznati vodopad u Južnoj Americi?", correct: "Anđelov vodopad", wrong: ["Iguazu", "Niagara", "Viktorija", "Kaieteur", "Tugela"] },
      et: { language: "et", continent: "Lõuna-Ameerika", question: "Kako se zove poznati vodopad u Južnoj Americi?", correct: "Anđelov vodopad", wrong: ["Iguazu", "Niagara", "Viktorija", "Kaieteur", "Tugela"] }
    }
  },
  {
    id: "sa-10",
    translations: {
      sr: { language: "sr", continent: "Južna Amerika", question: "Koja država Južne Amerike ima izlaz i na Atlantski i na Tihi okean?", correct: "Kolumbija", wrong: ["Brazil", "Venezuela", "Peru", "Čile", "Argentina"] },
      en: { language: "en", continent: "South America", question: "Koja država Južne Amerike ima izlaz i na Atlantski i na Tihi okean?", correct: "Kolumbija", wrong: ["Brazil", "Venezuela", "Peru", "Čile", "Argentina"] },
      de: { language: "de", continent: "Südamerika", question: "Koja država Južne Amerike ima izlaz i na Atlantski i na Tihi okean?", correct: "Kolumbija", wrong: ["Brazil", "Venezuela", "Peru", "Čile", "Argentina"] },
      ru: { language: "ru", continent: "Южная Аmerika", question: "Koja država Južne Amerike ima izlaz i na Atlantski i na Tihi okean?", correct: "Kolumbija", wrong: ["Brazil", "Venezuela", "Peru", "Čile", "Argentina"] },
      zh: { language: "zh", continent: "南美洲", question: "Koja država Južne Amerike ima izlaz i na Atlantski i na Tihi okean?", correct: "Kolumbija", wrong: ["Brazil", "Venezuela", "Peru", "Čile", "Argentina"] },
      et: { language: "et", continent: "Lõuna-Ameerika", question: "Koja država Južne Amerike ima izlaz i na Atlantski i na Tihi okean?", correct: "Kolumbija", wrong: ["Brazil", "Venezuela", "Peru", "Čile", "Argentina"] }
    }
  },
  {
    id: "sa-11",
    translations: {
      sr: { language: "sr", continent: "Južna Amerika", question: "Koja država je poznata po Galapagoskim ostrvima?", correct: "Ekvador", wrong: ["Peru", "Kolumbija", "Čile", "Venezuela", "Brazil"] },
      en: { language: "en", continent: "South America", question: "Koja država je poznata po Galapagoskim ostrvima?", correct: "Ekvador", wrong: ["Peru", "Kolumbija", "Čile", "Venezuela", "Brazil"] },
      de: { language: "de", continent: "Südamerika", question: "Koja država je poznata po Galapagoskim ostrvima?", correct: "Ekvador", wrong: ["Peru", "Kolumbija", "Čile", "Venezuela", "Brazil"] },
      ru: { language: "ru", continent: "Южная Аmerika", question: "Koja država je poznata po Galapagoskim ostrvima?", correct: "Ekvador", wrong: ["Peru", "Kolumbija", "Čile", "Venezuela", "Brazil"] },
      zh: { language: "zh", continent: "南美洲", question: "Koja država je poznata po Galapagoskim ostrvima?", correct: "Ekvador", wrong: ["Peru", "Kolumbija", "Čile", "Venezuela", "Brazil"] },
      et: { language: "et", continent: "Lõuna-Ameerika", question: "Koja država je poznata po Galapagoskim ostrvima?", correct: "Ekvador", wrong: ["Peru", "Kolumbija", "Čile", "Venezuela", "Brazil"] }
    }
  },
  {
    id: "sa-12",
    translations: {
      sr: { language: "sr", continent: "Južna Amerika", question: "Kako se zove najjužniji veći grad Južne Amerike, poznat kao 'kraj sveta'?", correct: "Ušuaja", wrong: ["Punta Arenas", "Puerto Montt", "Bariloche", "Puerto Natales", "Comodoro Rivadavia"] },
      en: { language: "en", continent: "South America", question: "Kako se zove najjužniji veći grad Južne Amerike, poznat kao 'kraj sveta'?", correct: "Ušuaja", wrong: ["Punta Arenas", "Puerto Montt", "Bariloche", "Puerto Natales", "Comodoro Rivadavia"] },
      de: { language: "de", continent: "Südamerika", question: "Kako se zove najjužniji veći grad Južne Amerike, poznat kao 'kraj sveta'?", correct: "Ušuaja", wrong: ["Punta Arenas", "Puerto Montt", "Bariloche", "Puerto Natales", "Comodoro Rivadavia"] },
      ru: { language: "ru", continent: "Южная Аmerika", question: "Kako se zove najjužniji veći grad Južne Amerike, poznat kao 'kraj sveta'?", correct: "Ušuaja", wrong: ["Punta Arenas", "Puerto Montt", "Bariloche", "Puerto Natales", "Comodoro Rivadavia"] },
      zh: { language: "zh", continent: "南美洲", question: "Kako se zove najjužniji veći grad Južne Amerike, poznat kao 'kraj sveta'?", correct: "Ušuaja", wrong: ["Punta Arenas", "Puerto Montt", "Bariloche", "Puerto Natales", "Comodoro Rivadavia"] },
      et: { language: "et", continent: "Lõuna-Ameerika", question: "Kako se zove najjužniji veći grad Južne Amerike, poznat kao 'kraj sveta'?", correct: "Ušuaja", wrong: ["Punta Arenas", "Puerto Montt", "Bariloche", "Puerto Natales", "Comodoro Rivadavia"] }
    }
  },
  {
    id: "sa-13",
    translations: {
      sr: { language: "sr", continent: "Južna Amerika", question: "Koja država Južne Amerike je poznata po fudbalu i brojnim svetskim titulama?", correct: "Brazil", wrong: ["Argentina", "Urugvaj", "Kolumbija", "Čile", "Peru"] },
      en: { language: "en", continent: "South America", question: "Koja država Južne Amerike je poznata po fudbalu i brojnim svetskim titulama?", correct: "Brazil", wrong: ["Argentina", "Urugvaj", "Kolumbija", "Čile", "Peru"] },
      de: { language: "de", continent: "Südamerika", question: "Koja država Južne Amerike je poznata po fudbalu i brojnim svetskim titulama?", correct: "Brazil", wrong: ["Argentina", "Urugvaj", "Kolumbija", "Čile", "Peru"] },
      ru: { language: "ru", continent: "Южная Аmerika", question: "Koja država Južne Amerike je poznata po fudbalu i brojnim svetskim titulama?", correct: "Brazil", wrong: ["Argentina", "Urugvaj", "Kolumbija", "Čile", "Peru"] },
      zh: { language: "zh", continent: "南美洲", question: "Koja država Južne Amerike je poznata po fudbalu i brojnim svetskim titulama?", correct: "Brazil", wrong: ["Argentina", "Urugvaj", "Kolumbija", "Čile", "Peru"] },
      et: { language: "et", continent: "Lõuna-Ameerika", question: "Koja država Južne Amerike je poznata po fudbalu i brojnim svetskim titulama?", correct: "Brazil", wrong: ["Argentina", "Urugvaj", "Kolumbija", "Čile", "Peru"] }
    }
  },
  {
    id: "sa-14",
    translations: {
      sr: { language: "sr", continent: "Južna Amerika", question: "U kom se gradu nalazi statua Hrista Spasitelja (Cristo Redentor)?", correct: "Rio de Žaneiro", wrong: ["Sao Paolo", "Buenos Ajres", "Lima", "Bogota", "Santjago"] },
      en: { language: "en", continent: "South America", question: "U kom se gradu nalazi statua Hrista Spasitelja (Cristo Redentor)?", correct: "Rio de Žaneiro", wrong: ["Sao Paolo", "Buenos Ajres", "Lima", "Bogota", "Santjago"] },
      de: { language: "de", continent: "Südamerika", question: "U kom se gradu nalazi statua Hrista Spasitelja (Cristo Redentor)?", correct: "Rio de Žaneiro", wrong: ["Sao Paolo", "Buenos Ajres", "Lima", "Bogota", "Santjago"] },
      ru: { language: "ru", continent: "Южная Аmerika", question: "U kom se gradu nalazi statua Hrista Spasitelja (Cristo Redentor)?", correct: "Rio de Žaneiro", wrong: ["Sao Paolo", "Buenos Ajres", "Lima", "Bogota", "Santjago"] },
      zh: { language: "zh", continent: "南美洲", question: "U kom se gradu nalazi statua Hrista Spasitelja (Cristo Redentor)?", correct: "Rio de Žaneiro", wrong: ["Sao Paolo", "Buenos Ajres", "Lima", "Bogota", "Santjago"] },
      et: { language: "et", continent: "Lõuna-Ameerika", question: "U kom se gradu nalazi statua Hrista Spasitelja (Cristo Redentor)?", correct: "Rio de Žaneiro", wrong: ["Sao Paolo", "Buenos Ajres", "Lima", "Bogota", "Santjago"] }
    }
  },
  {
    id: "sa-15",
    translations: {
      sr: { language: "sr", continent: "Južna Amerika", question: "Kako se zove poznati kanal koji povezuje Atlantski i Tihi okean?", correct: "Panamski kanal", wrong: ["Suecki kanal", "Magelanov moreuz", "Drejkov prolaz", "Beagle kanal", "Korintski kanal"] },
      en: { language: "en", continent: "South America", question: "Kako se zove poznati kanal koji povezuje Atlantski i Tihi okean?", correct: "Panamski kanal", wrong: ["Suecki kanal", "Magelanov moreuz", "Drejkov prolaz", "Beagle kanal", "Korintski kanal"] },
      de: { language: "de", continent: "Südamerika", question: "Kako se zove poznati kanal koji povezuje Atlantski i Tihi okean?", correct: "Panamski kanal", wrong: ["Suecki kanal", "Magelanov moreuz", "Drejkov prolaz", "Beagle kanal", "Korintski kanal"] },
      ru: { language: "ru", continent: "Южная Аmerika", question: "Kako se zove poznati kanal koji povezuje Atlantski i Tihi okean?", correct: "Panamski kanal", wrong: ["Suecki kanal", "Magelanov moreuz", "Drejkov prolaz", "Beagle kanal", "Korintski kanal"] },
      zh: { language: "zh", continent: "南美洲", question: "Kako se zove poznati kanal koji povezuje Atlantski i Tihi okean?", correct: "Panamski kanal", wrong: ["Suecki kanal", "Magelanov moreuz", "Drejkov prolaz", "Beagle kanal", "Korintski kanal"] },
      et: { language: "et", continent: "Lõuna-Ameerika", question: "Kako se zove poznati kanal koji povezuje Atlantski i Tihi okean?", correct: "Panamski kanal", wrong: ["Suecki kanal", "Magelanov moreuz", "Drejkov prolaz", "Beagle kanal", "Korintski kanal"] }
    }
  },
  {
    id: "sa-16",
    translations: {
      sr: { language: "sr", continent: "Južna Amerika", question: "Koja država Južne Amerike ima glavni grad Buenos Ajres?", correct: "Argentina", wrong: ["Urugvaj", "Čile", "Paragvaj", "Bolivija", "Brazil"] },
      en: { language: "en", continent: "South America", question: "Koja država Južne Amerike ima glavni grad Buenos Ajres?", correct: "Argentina", wrong: ["Urugvaj", "Čile", "Paragvaj", "Bolivija", "Brazil"] },
      de: { language: "de", continent: "Südamerika", question: "Koja država Južne Amerike ima glavni grad Buenos Ajres?", correct: "Argentina", wrong: ["Urugvaj", "Čile", "Paragvaj", "Bolivija", "Brazil"] },
      ru: { language: "ru", continent: "Южная Аmerika", question: "Koja država Južne Amerike ima glavni grad Buenos Ajres?", correct: "Argentina", wrong: ["Urugvaj", "Čile", "Paragvaj", "Bolivija", "Brazil"] },
      zh: { language: "zh", continent: "南美洲", question: "Koja država Južne Amerike ima glavni grad Buenos Ajres?", correct: "Argentina", wrong: ["Urugvaj", "Čile", "Paragvaj", "Bolivija", "Brazil"] },
      et: { language: "et", continent: "Lõuna-Ameerika", question: "Koja država Južne Amerike ima glavni grad Buenos Ajres?", correct: "Argentina", wrong: ["Urugvaj", "Čile", "Paragvaj", "Bolivija", "Brazil"] }
    }
  },
  {
    id: "sa-17",
    translations: {
      sr: { language: "sr", continent: "Južna Amerika", question: "Koja je reka u Južnoj Americi poznata po piranama?", correct: "Amazon", wrong: ["Parana", "Orinoko", "Paraguay", "Madeira", "Negro"] },
      en: { language: "en", continent: "South America", question: "Koja je reka u Južnoj Americi poznata po piranama?", correct: "Amazon", wrong: ["Parana", "Orinoko", "Paraguay", "Madeira", "Negro"] },
      de: { language: "de", continent: "Südamerika", question: "Koja je reka u Južnoj Americi poznata po piranama?", correct: "Amazon", wrong: ["Parana", "Orinoko", "Paraguay", "Madeira", "Negro"] },
      ru: { language: "ru", continent: "Южная Аmerika", question: "Koja je reka u Južnoj Americi poznata po piranama?", correct: "Amazon", wrong: ["Parana", "Orinoko", "Paraguay", "Madeira", "Negro"] },
      zh: { language: "zh", continent: "南美洲", question: "Koja je reka u Južnoj Americi poznata po piranama?", correct: "Amazon", wrong: ["Parana", "Orinoko", "Paraguay", "Madeira", "Negro"] },
      et: { language: "et", continent: "Lõuna-Ameerika", question: "Koja je reka u Južnoj Americi poznata po piranama?", correct: "Amazon", wrong: ["Parana", "Orinoko", "Paraguay", "Madeira", "Negro"] }
    }
  },
  {
    id: "sa-18",
    translations: {
      sr: { language: "sr", continent: "Južna Amerika", question: "Da li se Južna Amerika nalazi na severnoj ili južnoj polulopti?", correct: "Uglavnom na južnoj polulopti", wrong: ["Uglavnom na severnoj polulopti", "Potpuno na severnoj polulopti", "Podjednako na obe polulopte", "Potpuno na južnoj polulopti", "Na ekvatoru"] },
      en: { language: "en", continent: "South America", question: "Da li se Južna Amerika nalazi na severnoj ili južnoj polulopti?", correct: "Uglavnom na južnoj polulopti", wrong: ["Uglavnom na severnoj polulopti", "Potpuno na severnoj polulopti", "Podjednako na obe polulopte", "Potpuno na južnoj polulopti", "Na ekvatoru"] },
      de: { language: "de", continent: "Südamerika", question: "Da li se Južna Amerika nalazi na severnoj ili južnoj polulopti?", correct: "Uglavnom na južnoj polulopti", wrong: ["Uglavnom na severnoj polulopti", "Potpuno na severnoj polulopti", "Podjednako na obe polulopte", "Potpuno na južnoj polulopti", "Na ekvatoru"] },
      ru: { language: "ru", continent: "Южная Аmerika", question: "Da li se Južna Amerika nalazi na severnoj ili južnoj polulopti?", correct: "Uglavnom na južnoj polulopti", wrong: ["Uglavnom na severnoj polulopti", "Potpuno na severnoj polulopti", "Podjednako na obe polulopte", "Potpuno na južnoj polulopti", "Na ekvatoru"] },
      zh: { language: "zh", continent: "南美洲", question: "Da li se Južna Amerika nalazi na severnoj ili južnoj polulopti?", correct: "Uglavnom na južnoj polulopti", wrong: ["Uglavnom na severnoj polulopti", "Potpuno na severnoj polulopti", "Podjednako na obe polulopte", "Potpuno na južnoj polulopti", "Na ekvatoru"] },
      et: { language: "et", continent: "Lõuna-Ameerika", question: "Da li se Južna Amerika nalazi na severnoj ili južnoj polulopti?", correct: "Uglavnom na južnoj polulopti", wrong: ["Uglavnom na severnoj polulopti", "Potpuno na severnoj polulopti", "Podjednako na obe polulopte", "Potpuno na južnoj polulopti", "Na ekvatoru"] }
    }
  },
  {
    id: "sa-19",
    translations: {
      sr: { language: "sr", continent: "Južna Amerika", question: "Koje je najveće jezero u Južnoj Americi?", correct: "Titicaca", wrong: ["Marakajbo", "Poopó", "Mar Čikita", "Buenos Ajres jezero", "Nahuel Huapi"] },
      en: { language: "en", continent: "South America", question: "Koje je najveće jezero u Južnoj Americi?", correct: "Titicaca", wrong: ["Marakajbo", "Poopó", "Mar Čikita", "Buenos Ajres jezero", "Nahuel Huapi"] },
      de: { language: "de", continent: "Südamerika", question: "Koje je najveće jezero u Južnoj Americi?", correct: "Titicaca", wrong: ["Marakajbo", "Poopó", "Mar Čikita", "Buenos Ajres jezero", "Nahuel Huapi"] },
      ru: { language: "ru", continent: "Южная Аmerika", question: "Koje je najveće jezero u Južnoj Americi?", correct: "Titicaca", wrong: ["Marakajbo", "Poopó", "Mar Čikita", "Buenos Ajres jezero", "Nahuel Huapi"] },
      zh: { language: "zh", continent: "南美洲", question: "Koje je najveće jezero u Južnoj Americi?", correct: "Titicaca", wrong: ["Marakajbo", "Poopó", "Mar Čikita", "Buenos Ajres jezero", "Nahuel Huapi"] },
      et: { language: "et", continent: "Lõuna-Ameerika", question: "Koje je najveće jezero u Južnoj Americi?", correct: "Titicaca", wrong: ["Marakajbo", "Poopó", "Mar Čikita", "Buenos Ajres jezero", "Nahuel Huapi"] }
    }
  },
  {
    id: "sa-20",
    translations: {
      sr: { language: "sr", continent: "Južna Amerika", question: "Koji je zvanični kapital Brazila?", correct: "Brazilija", wrong: ["Rio de Žaneiro", "Sao Paolo", "Salvador", "Fortaleza", "Manaus"] },
      en: { language: "en", continent: "South America", question: "Koji je zvanični kapital Brazila?", correct: "Brazilija", wrong: ["Rio de Žaneiro", "Sao Paolo", "Salvador", "Fortaleza", "Manaus"] },
      de: { language: "de", continent: "Südamerika", question: "Koji je zvanični kapital Brazila?", correct: "Brazilija", wrong: ["Rio de Žaneiro", "Sao Paolo", "Salvador", "Fortaleza", "Manaus"] },
      ru: { language: "ru", continent: "Южная Аmerika", question: "Koji je zvanični kapital Brazila?", correct: "Brazilija", wrong: ["Rio de Žaneiro", "Sao Paolo", "Salvador", "Fortaleza", "Manaus"] },
      zh: { language: "zh", continent: "南美洲", question: "Koji je zvanični kapital Brazila?", correct: "Brazilija", wrong: ["Rio de Žaneiro", "Sao Paolo", "Salvador", "Fortaleza", "Manaus"] },
      et: { language: "et", continent: "Lõuna-Ameerika", question: "Koji je zvanični kapital Brazila?", correct: "Brazilija", wrong: ["Rio de Žaneiro", "Sao Paolo", "Salvador", "Fortaleza", "Manaus"] }
    }
  },
  {
    id: "au-01",
    translations: {
      sr: { language: "sr", continent: "Australija", question: "Kako se zove najviši vrh Australije?", correct: "Mont Kosciuszko", wrong: ["Mont Bogong", "Mont Feathertop", "Mont Townsend", "Bluff Knoll", "Mont Bartle Frere"] },
      en: { language: "en", continent: "Australia", question: "Kako se zove najviši vrh Australije?", correct: "Mont Kosciuszko", wrong: ["Mont Bogong", "Mont Feathertop", "Mont Townsend", "Bluff Knoll", "Mont Bartle Frere"] },
      de: { language: "de", continent: "Australien", question: "Kako se zove najviši vrh Australije?", correct: "Mont Kosciuszko", wrong: ["Mont Bogong", "Mont Feathertop", "Mont Townsend", "Bluff Knoll", "Mont Bartle Frere"] },
      ru: { language: "ru", continent: "Австралия", question: "Kako se zove najviši vrh Australije?", correct: "Mont Kosciuszko", wrong: ["Mont Bogong", "Mont Feathertop", "Mont Townsend", "Bluff Knoll", "Mont Bartle Frere"] },
      zh: { language: "zh", continent: "澳大利亚", question: "Kako se zove najviši vrh Australije?", correct: "Mont Kosciuszko", wrong: ["Mont Bogong", "Mont Feathertop", "Mont Townsend", "Bluff Knoll", "Mont Bartle Frere"] },
      et: { language: "et", continent: "Austraalia", question: "Kako se zove najviši vrh Australije?", correct: "Mont Kosciuszko", wrong: ["Mont Bogong", "Mont Feathertop", "Mont Townsend", "Bluff Knoll", "Mont Bartle Frere"] }
    }
  },
  {
    id: "au-02",
    translations: {
      sr: { language: "sr", continent: "Australija", question: "Koja je najduža reka Australije?", correct: "Marej", wrong: ["Darling", "Mambidži", "Finders", "Dejly", "Barku"] },
      en: { language: "en", continent: "Australia", question: "Koja je najduža reka Australije?", correct: "Marej", wrong: ["Darling", "Mambidži", "Finders", "Dejly", "Barku"] },
      de: { language: "de", continent: "Australien", question: "Koja je najduža reka Australije?", correct: "Marej", wrong: ["Darling", "Mambidži", "Finders", "Dejly", "Barku"] },
      ru: { language: "ru", continent: "Австралия", question: "Koja je najduža reka Australije?", correct: "Marej", wrong: ["Darling", "Mambidži", "Finders", "Dejly", "Barku"] },
      zh: { language: "zh", continent: "澳大利亚", question: "Koja je najduža reka Australije?", correct: "Marej", wrong: ["Darling", "Mambidži", "Finders", "Dejly", "Barku"] },
      et: { language: "et", continent: "Austraalia", question: "Koja je najduža reka Australije?", correct: "Marej", wrong: ["Darling", "Mambidži", "Finders", "Dejly", "Barku"] }
    }
  },
  {
    id: "au-03",
    translations: {
      sr: { language: "sr", continent: "Australija", question: "Kako se zove planinski lanac uz istočnu obalu Australije?", correct: "Veliko razvođe", wrong: ["Alpi", "Macdonnell", "Flinders", "Lofty", "Grampians"] },
      en: { language: "en", continent: "Australia", question: "Kako se zove planinski lanac uz istočnu obalu Australije?", correct: "Veliko razvođe", wrong: ["Alpi", "Macdonnell", "Flinders", "Lofty", "Grampians"] },
      de: { language: "de", continent: "Australien", question: "Kako se zove planinski lanac uz istočnu obalu Australije?", correct: "Veliko razvođe", wrong: ["Alpi", "Macdonnell", "Flinders", "Lofty", "Grampians"] },
      ru: { language: "ru", continent: "Австралия", question: "Kako se zove planinski lanac uz istočnu obalu Australije?", correct: "Veliko razvođe", wrong: ["Alpi", "Macdonnell", "Flinders", "Lofty", "Grampians"] },
      zh: { language: "zh", continent: "澳大利亚", question: "Kako se zove planinski lanac uz istočnu obalu Australije?", correct: "Veliko razvođe", wrong: ["Alpi", "Macdonnell", "Flinders", "Lofty", "Grampians"] },
      et: { language: "et", continent: "Austraalia", question: "Kako se zove planinski lanac uz istočnu obalu Australije?", correct: "Veliko razvođe", wrong: ["Alpi", "Macdonnell", "Flinders", "Lofty", "Grampians"] }
    }
  },
  {
    id: "au-04",
    translations: {
      sr: { language: "sr", continent: "Australija", question: "Kako se zove najveća nizija Australije?", correct: "Velika artezijska nizija", wrong: ["Nullarbor nizija", "Timorska nizija", "Erojmandzama", "Karpentarijska nizija", "Murumbidži nizija"] },
      en: { language: "en", continent: "Australia", question: "Kako se zove najveća nizija Australije?", correct: "Velika artezijska nizija", wrong: ["Nullarbor nizija", "Timorska nizija", "Erojmandzama", "Karpentarijska nizija", "Murumbidži nizija"] },
      de: { language: "de", continent: "Australien", question: "Kako se zove najveća nizija Australije?", correct: "Velika artezijska nizija", wrong: ["Nullarbor nizija", "Timorska nizija", "Erojmandzama", "Karpentarijska nizija", "Murumbidži nizija"] },
      ru: { language: "ru", continent: "Австралия", question: "Kako se zove najveća nizija Australije?", correct: "Velika artezijska nizija", wrong: ["Nullarbor nizija", "Timorska nizija", "Erojmandzama", "Karpentarijska nizija", "Murumbidži nizija"] },
      zh: { language: "zh", continent: "澳大利亚", question: "Kako se zove najveća nizija Australije?", correct: "Velika artezijska nizija", wrong: ["Nullarbor nizija", "Timorska nizija", "Erojmandzama", "Karpentarijska nizija", "Murumbidži nizija"] },
      et: { language: "et", continent: "Austraalia", question: "Kako se zove najveća nizija Australije?", correct: "Velika artezijska nizija", wrong: ["Nullarbor nizija", "Timorska nizija", "Erojmandzama", "Karpentarijska nizija", "Murumbidži nizija"] }
    }
  },
  {
    id: "au-05",
    translations: {
      sr: { language: "sr", continent: "Australija", question: "Koji okean leži na istoku Australije?", correct: "Tihi okean", wrong: ["Indijski okean", "Južni okean", "Koralno more", "Tasmansko more", "Arafursko more"] },
      en: { language: "en", continent: "Australia", question: "Koji okean leži na istoku Australije?", correct: "Tihi okean", wrong: ["Indijski okean", "Južni okean", "Koralno more", "Tasmansko more", "Arafursko more"] },
      de: { language: "de", continent: "Australien", question: "Koji okean leži na istoku Australije?", correct: "Tihi okean", wrong: ["Indijski okean", "Južni okean", "Koralno more", "Tasmansko more", "Arafursko more"] },
      ru: { language: "ru", continent: "Австралия", question: "Koji okean leži na istoku Australije?", correct: "Tihi okean", wrong: ["Indijski okean", "Južni okean", "Koralno more", "Tasmansko more", "Arafursko more"] },
      zh: { language: "zh", continent: "澳大利亚", question: "Koji okean leži na istoku Australije?", correct: "Tihi okean", wrong: ["Indijski okean", "Južni okean", "Koralno more", "Tasmansko more", "Arafursko more"] },
      et: { language: "et", continent: "Austraalia", question: "Koji okean leži na istoku Australije?", correct: "Tihi okean", wrong: ["Indijski okean", "Južni okean", "Koralno more", "Tasmansko more", "Arafursko more"] }
    }
  },
  {
    id: "au-06",
    translations: {
      sr: { language: "sr", continent: "Australija", question: "Kako se zove veliki koralni greben uz istočnu obalu Australije?", correct: "Veliki koralni greben", wrong: ["Mesoamerički greben", "Florida greben", "Novi Kaledonski greben", "Crveno more greben", "Andros greben"] },
      en: { language: "en", continent: "Australia", question: "Kako se zove veliki koralni greben uz istočnu obalu Australije?", correct: "Veliki koralni greben", wrong: ["Mesoamerički greben", "Florida greben", "Novi Kaledonski greben", "Crveno more greben", "Andros greben"] },
      de: { language: "de", continent: "Australien", question: "Kako se zove veliki koralni greben uz istočnu obalu Australije?", correct: "Veliki koralni greben", wrong: ["Mesoamerički greben", "Florida greben", "Novi Kaledonski greben", "Crveno more greben", "Andros greben"] },
      ru: { language: "ru", continent: "Австралия", question: "Kako se zove veliki koralni greben uz istočnu obalu Australije?", correct: "Veliki koralni greben", wrong: ["Mesoamerički greben", "Florida greben", "Novi Kaledonski greben", "Crveno more greben", "Andros greben"] },
      zh: { language: "zh", continent: "澳大利亚", question: "Kako se zove veliki koralni greben uz istočnu obalu Australije?", correct: "Veliki koralni greben", wrong: ["Mesoamerički greben", "Florida greben", "Novi Kaledonski greben", "Crveno more greben", "Andros greben"] },
      et: { language: "et", continent: "Austraalia", question: "Kako se zove veliki koralni greben uz istočnu obalu Australije?", correct: "Veliki koralni greben", wrong: ["Mesoamerički greben", "Florida greben", "Novi Kaledonski greben", "Crveno more greben", "Andros greben"] }
    }
  },
  {
    id: "au-07",
    translations: {
      sr: { language: "sr", continent: "Australija", question: "Kakva je klima u unutrašnjosti Australije?", correct: "Sušna i pustinjska", wrong: ["Tropska i vlažna", "Umerena i hladna", "Mediteranska", "Monsunska", "Polarna"] },
      en: { language: "en", continent: "Australia", question: "Kakva je klima u unutrašnjosti Australije?", correct: "Sušna i pustinjska", wrong: ["Tropska i vlažna", "Umerena i hladna", "Mediteranska", "Monsunska", "Polarna"] },
      de: { language: "de", continent: "Australien", question: "Kakva je klima u unutrašnjosti Australije?", correct: "Sušna i pustinjska", wrong: ["Tropska i vlažna", "Umerena i hladna", "Mediteranska", "Monsunska", "Polarna"] },
      ru: { language: "ru", continent: "Австралия", question: "Kakva je klima u unutrašnjosti Australije?", correct: "Sušna i pustinjska", wrong: ["Tropska i vlažna", "Umerena i hladna", "Mediteranska", "Monsunska", "Polarna"] },
      zh: { language: "zh", continent: "澳大利亚", question: "Kakva je klima u unutrašnjosti Australije?", correct: "Sušna i pustinjska", wrong: ["Tropska i vlažna", "Umerena i hladna", "Mediteranska", "Monsunska", "Polarna"] },
      et: { language: "et", continent: "Austraalia", question: "Kakva je klima u unutrašnjosti Australije?", correct: "Sušna i pustinjska", wrong: ["Tropska i vlažna", "Umerena i hladna", "Mediteranska", "Monsunska", "Polarna"] }
    }
  },
  {
    id: "au-08",
    translations: {
      sr: { language: "sr", continent: "Australija", question: "Kako se zove crvena stena u središtu Australije?", correct: "Uluru", wrong: ["Kata Tjuta", "Devil's Marbles", "Bungle Bungles", "Mont Koner", "Wave Rock"] },
      en: { language: "en", continent: "Australia", question: "Kako se zove crvena stena u središtu Australije?", correct: "Uluru", wrong: ["Kata Tjuta", "Devil's Marbles", "Bungle Bungles", "Mont Koner", "Wave Rock"] },
      de: { language: "de", continent: "Australien", question: "Kako se zove crvena stena u središtu Australije?", correct: "Uluru", wrong: ["Kata Tjuta", "Devil's Marbles", "Bungle Bungles", "Mont Koner", "Wave Rock"] },
      ru: { language: "ru", continent: "Австралия", question: "Kako se zove crvena stena u središtu Australije?", correct: "Uluru", wrong: ["Kata Tjuta", "Devil's Marbles", "Bungle Bungles", "Mont Koner", "Wave Rock"] },
      zh: { language: "zh", continent: "澳大利亚", question: "Kako se zove crvena stena u središtu Australije?", correct: "Uluru", wrong: ["Kata Tjuta", "Devil's Marbles", "Bungle Bungles", "Mont Koner", "Wave Rock"] },
      et: { language: "et", continent: "Austraalia", question: "Kako se zove crvena stena u središtu Australije?", correct: "Uluru", wrong: ["Kata Tjuta", "Devil's Marbles", "Bungle Bungles", "Mont Koner", "Wave Rock"] }
    }
  },
  {
    id: "au-09",
    translations: {
      sr: { language: "sr", continent: "Australija", question: "Da li su reke u Australiji uglavnom stalne ili povremene?", correct: "Uglavnom povremene", wrong: ["Uglavnom stalne", "Sve su stalne", "Sve su povremene", "Pola stalnih", "pola povremenih", "Samo na obali povremene"] },
      en: { language: "en", continent: "Australia", question: "Da li su reke u Australiji uglavnom stalne ili povremene?", correct: "Uglavnom povremene", wrong: ["Uglavnom stalne", "Sve su stalne", "Sve su povremene", "Pola stalnih", "pola povremenih", "Samo na obali povremene"] },
      de: { language: "de", continent: "Australien", question: "Da li su reke u Australiji uglavnom stalne ili povremene?", correct: "Uglavnom povremene", wrong: ["Uglavnom stalne", "Sve su stalne", "Sve su povremene", "Pola stalnih", "pola povremenih", "Samo na obali povremene"] },
      ru: { language: "ru", continent: "Австралия", question: "Da li su reke u Australiji uglavnom stalne ili povremene?", correct: "Uglavnom povremene", wrong: ["Uglavnom stalne", "Sve su stalne", "Sve su povremene", "Pola stalnih", "pola povremenih", "Samo na obali povremene"] },
      zh: { language: "zh", continent: "澳大利亚", question: "Da li su reke u Australiji uglavnom stalne ili povremene?", correct: "Uglavnom povremene", wrong: ["Uglavnom stalne", "Sve su stalne", "Sve su povremene", "Pola stalnih", "pola povremenih", "Samo na obali povremene"] },
      et: { language: "et", continent: "Austraalia", question: "Da li su reke u Australiji uglavnom stalne ili povremene?", correct: "Uglavnom povremene", wrong: ["Uglavnom stalne", "Sve su stalne", "Sve su povremene", "Pola stalnih", "pola povremenih", "Samo na obali povremene"] }
    }
  },
  {
    id: "au-10",
    translations: {
      sr: { language: "sr", continent: "Australija", question: "Kako se zove životinja koja živi u Australiji i spava oko 20 sati dnevno?", correct: "Koala", wrong: ["Kenguр", "Vombat", "Tasmanijski đavo", "Ešidna", "Platipus"] },
      en: { language: "en", continent: "Australia", question: "Kako se zove životinja koja živi u Australiji i spava oko 20 sati dnevno?", correct: "Koala", wrong: ["Kenguр", "Vombat", "Tasmanijski đavo", "Ešidna", "Platipus"] },
      de: { language: "de", continent: "Australien", question: "Kako se zove životinja koja živi u Australiji i spava oko 20 sati dnevno?", correct: "Koala", wrong: ["Kenguр", "Vombat", "Tasmanijski đavo", "Ešidna", "Platipus"] },
      ru: { language: "ru", continent: "Австралия", question: "Kako se zove životinja koja živi u Australiji i spava oko 20 sati dnevno?", correct: "Koala", wrong: ["Kenguр", "Vombat", "Tasmanijski đavo", "Ešidna", "Platipus"] },
      zh: { language: "zh", continent: "澳大利亚", question: "Kako se zove životinja koja živi u Australiji i spava oko 20 sati dnevno?", correct: "Koala", wrong: ["Kenguр", "Vombat", "Tasmanijski đavo", "Ešidna", "Platipus"] },
      et: { language: "et", continent: "Austraalia", question: "Kako se zove životinja koja živi u Australiji i spava oko 20 sati dnevno?", correct: "Koala", wrong: ["Kenguр", "Vombat", "Tasmanijski đavo", "Ešidna", "Platipus"] }
    }
  },
  {
    id: "au-11",
    translations: {
      sr: { language: "sr", continent: "Australija", question: "U kom delu Australije živi najveći broj stanovnika?", correct: "Uz obalu (jugoistok)", wrong: ["U unutrašnjosti", "Na severu", "U centru kontinenta", "Na zapadu", "Na jugozapadu"] },
      en: { language: "en", continent: "Australia", question: "U kom delu Australije živi najveći broj stanovnika?", correct: "Uz obalu (jugoistok)", wrong: ["U unutrašnjosti", "Na severu", "U centru kontinenta", "Na zapadu", "Na jugozapadu"] },
      de: { language: "de", continent: "Australien", question: "U kom delu Australije živi najveći broj stanovnika?", correct: "Uz obalu (jugoistok)", wrong: ["U unutrašnjosti", "Na severu", "U centru kontinenta", "Na zapadu", "Na jugozapadu"] },
      ru: { language: "ru", continent: "Австралия", question: "U kom delu Australije živi najveći broj stanovnika?", correct: "Uz obalu (jugoistok)", wrong: ["U unutrašnjosti", "Na severu", "U centru kontinenta", "Na zapadu", "Na jugozapadu"] },
      zh: { language: "zh", continent: "澳大利亚", question: "U kom delu Australije živi najveći broj stanovnika?", correct: "Uz obalu (jugoistok)", wrong: ["U unutrašnjosti", "Na severu", "U centru kontinenta", "Na zapadu", "Na jugozapadu"] },
      et: { language: "et", continent: "Austraalia", question: "U kom delu Australije živi najveći broj stanovnika?", correct: "Uz obalu (jugoistok)", wrong: ["U unutrašnjosti", "Na severu", "U centru kontinenta", "Na zapadu", "Na jugozapadu"] }
    }
  },
  {
    id: "au-12",
    translations: {
      sr: { language: "sr", continent: "Australija", question: "Koji grad Australije je poznat po čuvenom mostu i operi?", correct: "Sidnej", wrong: ["Melburn", "Brizben", "Pert", "Adelejd", "Kanbera"] },
      en: { language: "en", continent: "Australia", question: "Koji grad Australije je poznat po čuvenom mostu i operi?", correct: "Sidnej", wrong: ["Melburn", "Brizben", "Pert", "Adelejd", "Kanbera"] },
      de: { language: "de", continent: "Australien", question: "Koji grad Australije je poznat po čuvenom mostu i operi?", correct: "Sidnej", wrong: ["Melburn", "Brizben", "Pert", "Adelejd", "Kanbera"] },
      ru: { language: "ru", continent: "Австралия", question: "Koji grad Australije je poznat po čuvenom mostu i operi?", correct: "Sidnej", wrong: ["Melburn", "Brizben", "Pert", "Adelejd", "Kanbera"] },
      zh: { language: "zh", continent: "澳大利亚", question: "Koji grad Australije je poznat po čuvenom mostu i operi?", correct: "Sidnej", wrong: ["Melburn", "Brizben", "Pert", "Adelejd", "Kanbera"] },
      et: { language: "et", continent: "Austraalia", question: "Koji grad Australije je poznat po čuvenom mostu i operi?", correct: "Sidnej", wrong: ["Melburn", "Brizben", "Pert", "Adelejd", "Kanbera"] }
    }
  },
  {
    id: "au-13",
    translations: {
      sr: { language: "sr", continent: "Australija", question: "Kako se zovu starosedeoci Australije?", correct: "Aboridžini", wrong: ["Maori", "Polinežani", "Melanežani", "Mikronezijaini", "Tasmanijanci"] },
      en: { language: "en", continent: "Australia", question: "Kako se zovu starosedeoci Australije?", correct: "Aboridžini", wrong: ["Maori", "Polinežani", "Melanežani", "Mikronezijaini", "Tasmanijanci"] },
      de: { language: "de", continent: "Australien", question: "Kako se zovu starosedeoci Australije?", correct: "Aboridžini", wrong: ["Maori", "Polinežani", "Melanežani", "Mikronezijaini", "Tasmanijanci"] },
      ru: { language: "ru", continent: "Австралия", question: "Kako se zovu starosedeoci Australije?", correct: "Aboridžini", wrong: ["Maori", "Polinežani", "Melanežani", "Mikronezijaini", "Tasmanijanci"] },
      zh: { language: "zh", continent: "澳大利亚", question: "Kako se zovu starosedeoci Australije?", correct: "Aboridžini", wrong: ["Maori", "Polinežani", "Melanežani", "Mikronezijaini", "Tasmanijanci"] },
      et: { language: "et", continent: "Austraalia", question: "Kako se zovu starosedeoci Australije?", correct: "Aboridžini", wrong: ["Maori", "Polinežani", "Melanežani", "Mikronezijaini", "Tasmanijanci"] }
    }
  },
  {
    id: "au-14",
    translations: {
      sr: { language: "sr", continent: "Australija", question: "Zašto je unutrašnjost Australije slabo naseljena?", correct: "Zbog sušne i pustinjske klime", wrong: ["Zbog hladne klime", "Zbog planina", "Zbog gustih prašuma", "Zbog aktivnih vulkana", "Zbog poplava"] },
      en: { language: "en", continent: "Australia", question: "Zašto je unutrašnjost Australije slabo naseljena?", correct: "Zbog sušne i pustinjske klime", wrong: ["Zbog hladne klime", "Zbog planina", "Zbog gustih prašuma", "Zbog aktivnih vulkana", "Zbog poplava"] },
      de: { language: "de", continent: "Australien", question: "Zašto je unutrašnjost Australije slabo naseljena?", correct: "Zbog sušne i pustinjske klime", wrong: ["Zbog hladne klime", "Zbog planina", "Zbog gustih prašuma", "Zbog aktivnih vulkana", "Zbog poplava"] },
      ru: { language: "ru", continent: "Австралия", question: "Zašto je unutrašnjost Australije slabo naseljena?", correct: "Zbog sušne i pustinjske klime", wrong: ["Zbog hladne klime", "Zbog planina", "Zbog gustih prašuma", "Zbog aktivnih vulkana", "Zbog poplava"] },
      zh: { language: "zh", continent: "澳大利亚", question: "Zašto je unutrašnjost Australije slabo naseljena?", correct: "Zbog sušne i pustinjske klime", wrong: ["Zbog hladne klime", "Zbog planina", "Zbog gustih prašuma", "Zbog aktivnih vulkana", "Zbog poplava"] },
      et: { language: "et", continent: "Austraalia", question: "Zašto je unutrašnjost Australije slabo naseljena?", correct: "Zbog sušne i pustinjske klime", wrong: ["Zbog hladne klime", "Zbog planina", "Zbog gustih prašuma", "Zbog aktivnih vulkana", "Zbog poplava"] }
    }
  },
  {
    id: "au-15",
    translations: {
      sr: { language: "sr", continent: "Australija", question: "Kako se zove životinja koja skače i živi samo u Australiji?", correct: "Kengur", wrong: ["Koala", "Vombat", "Kval", "Platipus", "Tasmanijski đavo"] },
      en: { language: "en", continent: "Australia", question: "Kako se zove životinja koja skače i živi samo u Australiji?", correct: "Kengur", wrong: ["Koala", "Vombat", "Kval", "Platipus", "Tasmanijski đavo"] },
      de: { language: "de", continent: "Australien", question: "Kako se zove životinja koja skače i živi samo u Australiji?", correct: "Kengur", wrong: ["Koala", "Vombat", "Kval", "Platipus", "Tasmanijski đavo"] },
      ru: { language: "ru", continent: "Австралия", question: "Kako se zove životinja koja skače i živi samo u Australiji?", correct: "Kengur", wrong: ["Koala", "Vombat", "Kval", "Platipus", "Tasmanijski đavo"] },
      zh: { language: "zh", continent: "澳大利亚", question: "Kako se zove životinja koja skače i živi samo u Australiji?", correct: "Kengur", wrong: ["Koala", "Vombat", "Kval", "Platipus", "Tasmanijski đavo"] },
      et: { language: "et", continent: "Austraalia", question: "Kako se zove životinja koja skače i živi samo u Australiji?", correct: "Kengur", wrong: ["Koala", "Vombat", "Kval", "Platipus", "Tasmanijski đavo"] }
    }
  },
  {
    id: "au-16",
    translations: {
      sr: { language: "sr", continent: "Australija", question: "Da li u Australiji ima više šuma ili pustinja?", correct: "Pustinja", wrong: ["Šuma", "Podjednako", "Savana dominira", "Livade dominiraju", "Tundra dominira"] },
      en: { language: "en", continent: "Australia", question: "Da li u Australiji ima više šuma ili pustinja?", correct: "Pustinja", wrong: ["Šuma", "Podjednako", "Savana dominira", "Livade dominiraju", "Tundra dominira"] },
      de: { language: "de", continent: "Australien", question: "Da li u Australiji ima više šuma ili pustinja?", correct: "Pustinja", wrong: ["Šuma", "Podjednako", "Savana dominira", "Livade dominiraju", "Tundra dominira"] },
      ru: { language: "ru", continent: "Австралия", question: "Da li u Australiji ima više šuma ili pustinja?", correct: "Pustinja", wrong: ["Šuma", "Podjednako", "Savana dominira", "Livade dominiraju", "Tundra dominira"] },
      zh: { language: "zh", continent: "澳大利亚", question: "Da li u Australiji ima više šuma ili pustinja?", correct: "Pustinja", wrong: ["Šuma", "Podjednako", "Savana dominira", "Livade dominiraju", "Tundra dominira"] },
      et: { language: "et", continent: "Austraalia", question: "Da li u Australiji ima više šuma ili pustinja?", correct: "Pustinja", wrong: ["Šuma", "Podjednako", "Savana dominira", "Livade dominiraju", "Tundra dominira"] }
    }
  },
  {
    id: "au-17",
    translations: {
      sr: { language: "sr", continent: "Australija", question: "Da li se Australija nalazi u južnoj ili severnoj hemisferi?", correct: "Južnoj", wrong: ["Severnoj", "Na ekvatoru", "Podjednako u obe", "Uglavnom u severnoj", "Na nultom meridianu"] },
      en: { language: "en", continent: "Australia", question: "Da li se Australija nalazi u južnoj ili severnoj hemisferi?", correct: "Južnoj", wrong: ["Severnoj", "Na ekvatoru", "Podjednako u obe", "Uglavnom u severnoj", "Na nultom meridianu"] },
      de: { language: "de", continent: "Australien", question: "Da li se Australija nalazi u južnoj ili severnoj hemisferi?", correct: "Južnoj", wrong: ["Severnoj", "Na ekvatoru", "Podjednako u obe", "Uglavnom u severnoj", "Na nultom meridianu"] },
      ru: { language: "ru", continent: "Австралия", question: "Da li se Australija nalazi u južnoj ili severnoj hemisferi?", correct: "Južnoj", wrong: ["Severnoj", "Na ekvatoru", "Podjednako u obe", "Uglavnom u severnoj", "Na nultom meridianu"] },
      zh: { language: "zh", continent: "澳大利亚", question: "Da li se Australija nalazi u južnoj ili severnoj hemisferi?", correct: "Južnoj", wrong: ["Severnoj", "Na ekvatoru", "Podjednako u obe", "Uglavnom u severnoj", "Na nultom meridianu"] },
      et: { language: "et", continent: "Austraalia", question: "Da li se Australija nalazi u južnoj ili severnoj hemisferi?", correct: "Južnoj", wrong: ["Severnoj", "Na ekvatoru", "Podjednako u obe", "Uglavnom u severnoj", "Na nultom meridianu"] }
    }
  },
  {
    id: "au-18",
    translations: {
      sr: { language: "sr", continent: "Australija", question: "Kako se zove poznata suva oblast u središtu Australije?", correct: "Outback", wrong: ["Buskveld", "Veldt", "Savana", "Cerrado", "Pampa"] },
      en: { language: "en", continent: "Australia", question: "Kako se zove poznata suva oblast u središtu Australije?", correct: "Outback", wrong: ["Buskveld", "Veldt", "Savana", "Cerrado", "Pampa"] },
      de: { language: "de", continent: "Australien", question: "Kako se zove poznata suva oblast u središtu Australije?", correct: "Outback", wrong: ["Buskveld", "Veldt", "Savana", "Cerrado", "Pampa"] },
      ru: { language: "ru", continent: "Австралия", question: "Kako se zove poznata suva oblast u središtu Australije?", correct: "Outback", wrong: ["Buskveld", "Veldt", "Savana", "Cerrado", "Pampa"] },
      zh: { language: "zh", continent: "澳大利亚", question: "Kako se zove poznata suva oblast u središtu Australije?", correct: "Outback", wrong: ["Buskveld", "Veldt", "Savana", "Cerrado", "Pampa"] },
      et: { language: "et", continent: "Austraalia", question: "Kako se zove poznata suva oblast u središtu Australije?", correct: "Outback", wrong: ["Buskveld", "Veldt", "Savana", "Cerrado", "Pampa"] }
    }
  },
  {
    id: "au-19",
    translations: {
      sr: { language: "sr", continent: "Australija", question: "Kako se zove najveće ostrvo povezano sa Australijom?", correct: "Tasmanija", wrong: ["Kangaroo ostrvo", "Fraser ostrvo", "Melville ostrvo", "Bruny ostrvo", "Lord Howe ostrvo"] },
      en: { language: "en", continent: "Australia", question: "Kako se zove najveće ostrvo povezano sa Australijom?", correct: "Tasmanija", wrong: ["Kangaroo ostrvo", "Fraser ostrvo", "Melville ostrvo", "Bruny ostrvo", "Lord Howe ostrvo"] },
      de: { language: "de", continent: "Australien", question: "Kako se zove najveće ostrvo povezano sa Australijom?", correct: "Tasmanija", wrong: ["Kangaroo ostrvo", "Fraser ostrvo", "Melville ostrvo", "Bruny ostrvo", "Lord Howe ostrvo"] },
      ru: { language: "ru", continent: "Австралия", question: "Kako se zove najveće ostrvo povezano sa Australijom?", correct: "Tasmanija", wrong: ["Kangaroo ostrvo", "Fraser ostrvo", "Melville ostrvo", "Bruny ostrvo", "Lord Howe ostrvo"] },
      zh: { language: "zh", continent: "澳大利亚", question: "Kako se zove najveće ostrvo povezano sa Australijom?", correct: "Tasmanija", wrong: ["Kangaroo ostrvo", "Fraser ostrvo", "Melville ostrvo", "Bruny ostrvo", "Lord Howe ostrvo"] },
      et: { language: "et", continent: "Austraalia", question: "Kako se zove najveće ostrvo povezano sa Australijom?", correct: "Tasmanija", wrong: ["Kangaroo ostrvo", "Fraser ostrvo", "Melville ostrvo", "Bruny ostrvo", "Lord Howe ostrvo"] }
    }
  },
  {
    id: "au-20",
    translations: {
      sr: { language: "sr", continent: "Australija", question: "Koji je glavni grad Australije?", correct: "Kanbera", wrong: ["Sidnej", "Melburn", "Brizben", "Pert", "Adelejd"] },
      en: { language: "en", continent: "Australia", question: "Koji je glavni grad Australije?", correct: "Kanbera", wrong: ["Sidnej", "Melburn", "Brizben", "Pert", "Adelejd"] },
      de: { language: "de", continent: "Australien", question: "Koji je glavni grad Australije?", correct: "Kanbera", wrong: ["Sidnej", "Melburn", "Brizben", "Pert", "Adelejd"] },
      ru: { language: "ru", continent: "Австралия", question: "Koji je glavni grad Australije?", correct: "Kanbera", wrong: ["Sidnej", "Melburn", "Brizben", "Pert", "Adelejd"] },
      zh: { language: "zh", continent: "澳大利亚", question: "Koji je glavni grad Australije?", correct: "Kanbera", wrong: ["Sidnej", "Melburn", "Brizben", "Pert", "Adelejd"] },
      et: { language: "et", continent: "Austraalia", question: "Koji je glavni grad Australije?", correct: "Kanbera", wrong: ["Sidnej", "Melburn", "Brizben", "Pert", "Adelejd"] }
    }
  },
];

/**
 * Ova funkcija transformiše gore kreiranu ugnježdenu strukturu u 
 * običan ("flat") niz koji sadrži sve prevode kao posebne objekte sa "language" poljem.
 */
export const getQuestions = () => {
  return rawQuestions.flatMap(item => {
    return Object.values(item.translations).map(translation => ({
      id: item.id,
      ...translation
    }));
  });
};

export const questions = getQuestions();

export default rawQuestions;
