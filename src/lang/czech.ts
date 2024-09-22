export const translations = {
    global: {
        main: "Hlavní",
        rare: "Vzácné",
        plat: "100%",
        topleft: "Vlevo nahoře",
        topcenter: "Nahoře ve středu",
        topright: "Vpravo nahoře",
        bottomleft: "Vlevo dole",
        bottomcenter: "Dole ve středu",
        bottomright: "Vpravo dole",
        ok: "OK",
        preview: "Náhled",
        save: "Uložit",
        back: "Zpět",
        settings: "Nastavení",
        appversion: "Verze aplikace",
        image: "Obrázek",
        audio: "Audio",
        folder: "Složka",
        font: "Písmo",
        select: "Vybrat",
        gametitle: "Název hry",
        congrats: "Gratulujeme!",
        achievementunlocked: "Dosáhli jste úspěchu",
        gamecomplete: "100% Dokončeno",
        achievementdesc: "Kliknutím na tlačítko Zobrazit testovací oznámení",
        gamecompletedesc: "Odemkli jste všechny úspěchy!",
        defaultcustomfont: "Výchozí (Není vybráno písmo)",
        defaultsoundfile: "Výchozí (Není vybrán zvukový soubor)",
        defaultsounddir: "Výchozí (Není vybraná složka)",
        nowtracking: "Nyní sledujete úspěchy pro:",
        nopreview: "Náhled není k dispozici pro nativní operační systém",
        options: "Možnosti",
        resetwindow: "Obnovit okno",
        show: "Zobrazit",
        exit: "Ukončit",
        releasegame: "Uvolnit hru",
        noupdateavailable: "Žádná aktualizace není k dispozici",
        latestversion: "Nejnovější verze je nainstalována",
        missingdeps: "Chybějící závislost",
        missingdepssub: [
            `Zdá se, že se snažíte povolit možnost <span class="hl">Vytvořit snímek obrazovky ve Steamu</span>. Nicméně v Linuxu nelze snímky obrazovky automaticky spustit bez předchozí instalace balíčku <code class="dialogcode">xdotool</code>`,
            `Prosím, spusťte <code class="dialogcode" style="user-select: text;">sudo apt-get install xdotool</code> pro instalaci této závislosti, což zajistí, že na tomto zařízení lze vytvářet snímky obrazovky ve Steamu`
        ],
        restartapp: "Restartovat Aplikaci",
        restartappsub: [
            `Pokud věci nefungují správně, použijte tuto možnost k uzavření a znovuotevření aplikace`,
            `Pokud problém přetrvává i po restartování aplikace, zvažte jeho nahlášení pomocí odkazů v aplikaci na domovské obrazovce`
        ],
        suspend: "Pozastavit",
        resume: "Obnovit",
        new: "Nové...",
        nodata: "Žádná data",
        findappid: "Najít AppID",
        findappidsub: [
            `Každá hra ve službě Steam má unikátní číslo - nazývané <span class="hl">AppID</span>. AppID každé hry ve službě Steam můžete najít pomocí následujících metod:`,
            `V <span class="hl">klientu Steam</span> klikněte pravým tlačítkem myši na hru ve vaší <span class="hl">knihovně</span> a vyberte <i>Vlastnosti</i> > <i>Aktualizace</i> - AppID bude zde uveden`,
            `URL adresa stránky <span class="hl">obchodu</span> s hrou - číslo bude uvedeno za <span class="hl">app/</span>: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `Webové stránky jako <span class="hl">SteamDB</span> - sekce <span class="hl">Informace o aplikaci</span> bude seznamovat AppID pro každou hru`
        ],
        elemselector: "Prvky oznámení",
        unlockmsg: "Zpráva o odemknutí",
        title: "Název úspěchu",
        desc: "Popis úspěchu",
        hiddeniconpos: "Skrytá ikona",
        sshiddeniconpos: "Skrytá ikona",
        decorationpos: "Dekorace",
        ssdecorationpos: "Dekorace",
        percentpos: "Procento vzácnosti",
        sspercentpos: "Procento vzácnosti",
        noexe: "Soubor EXE hry nebyl nalezen!",
        noexesub: `Vyberte Možnosti > Uvolnit hru z hlavního panelu pro ukončení`,
        webhookunlockmsg: "$user odemkl úspěch",
        webhookingame: "ve $gamename",
        percentbadge: "Procentuální odznak",
        sspercentbadge: "Procentuální odznak",
        percentbadgepos: "Pozice odznaku",
        sspercentbadgepos: "Pozice odznaku",
        percentbadgecolor: "Barva odznaku",
        sspercentbadgecolor: "Barva odznaku",
        percentbadgefontsize: "Velikost odznaku",
        sspercentbadgefontsize: "Velikost odznaku",
        percentbadgeroundness: "Zaoblení odznaku",
        sspercentbadgeroundness: "Zaoblení odznaku",
        top: "Nahoře",
        bottom: "Dole"
    },
    app: {
        content: {
            game: "Žádná zjištěná hra",
            customise: "Přizpůsobit",
            test: "Zobrazit testovací upozornění"
        }
    },
    settings: {
        language: {
            title: "Jazyk",
            content: {
                steamlang: "Přeložit úspěchy do jazyka Steamu",
                maxsteamlangretries: "Maximální počet pokusů o překlad"
            }
        },
        os: {
            title: "Operační systém",
            content: {
                desktop: "Vytvořit zástupce na ploše",
                startwin: "Spustit při přihlášení",
                startmin: "Spustit minimalizováno",
                nohwa: "Vypnout hardwarové akcelerace",
                litemode: "Režim Lite"
            }
        },
        notifications: {
            title: "Upozornění",
            content: {
                rarity: "Procento vzácnosti",
                rareonly: "Pouze vzácné",
                all: "Vše",
                off: "Vypnuto",
                showpercent: "Zobrazit procenta",
                soundonly: "Pouze zvuk",
                extwin: "Upozornění na stream",
                audiosrc: "Zdroj zvuku",
                notify: "Upozornění",
                app: "Aplikace",
                nowtracking: "Zobrazit Oznámení o Sledování",
                nowtrackingscale: "Měřítko Sledování",
                nowtrackingpos: "Sledování Pozice",
                shortcuts: "Zkratky upozornění",
                noiconcache: "Zakázat mezipaměť ikon",
                webhooks: "Odeslat na Discord server",
                webhookurl: `URL Webhooku`,
                webhookcaution: `Povolením této možnosti a poskytnutím platného odkazu na Webhook Discordu souhlasíte s tím, že rozumíte, že <u>veškeré informace o úspěších a hrách aktuálního uživatele Steamu</u> budou odeslány na určený server Discord prostřednictvím poskytnutého odkazu Webhooku.<br><br>Pokud nechcete, aby Steam Achievement Notifier odesílal tyto informace vaším jménem, prosím deaktivujte tuto možnost.`,
                webhooklaststatus: "Poslední stav"
            }
        },
        media: {
            title: "Média",
            content: {
                steamss: "Pořídit screenshot z Steamu",
                screenshots: "Další média",
                off: "Vypnuto",
                overlay: "Screenshot s překryvem upozornění",
                monitors: "Zdroj screenshotu",
                hdrmode: "Režim HDR",
                ovpos: "Pozice překryvu",
                ovmatch: "Shodovat pozici přizpůsobení",
                ovx: "Horizontální posun",
                ovy: "Vertikální posun",
                ovpath: "Cesta screenshotu",
                ssdelay: "Zpoždění screenshotu",
                notifyimg: "Obrázek oznámení",
                imgpath: "Cesta k obrázku"
            }
        },
        games: {
            title: "Hry",
            content: {
                linkedgames: "Propojené hry",
                exclusionlist: "Seznam vyloučení"
            }
        },
        accessibility: {
            title: "Přístupnost",
            content: {
                noanim: "Vypnout animace okna aplikace",
                noupdatedialog: "Deaktivovat dialog Aktualizace",
                nvda: "Povolit podporu NVDA",
                tooltips: "Zobrazit tooltipy"
            }
        },
        advanced: {
            title: "Pokročilé",
            content: {
                pollrate: "Frekvence dotazů",
                initdelay: "Zpoždění sledování",
                releasedelay: "Zpoždění Vydání",
                maxretries: "Maximální počet opakování procesu",
                debug: "Panel Ladění",
                userust: "Alternativní Režim Zpracování",
                notifydebug: "Zobrazit oznámení nástrojů pro ladění",
                usecustomfiles: "Použít vlastní soubory aplikace",
                showcustomfiles: "Zobrazit vlastní soubory aplikace"
            }
        },        
        misc: {
            title: "Různé",
            content: {
                checkforupdates: "Zkontrolovat Aktualizace",
                log: "Záznam Aplikace",
                reset: "Resetovat aplikaci"
            }
        }
    },    
    customiser: {
        preset: {
            title: "Přednastavení",
            content: {
                preset: "Přednastavení upozornění",
                iconanim: "Animace vzácné ikony",
                alldetails: "Zobrazit všechny podrobnosti",
                usepercent: "Použít procenta",
                displaytime: "Čas zobrazení",
                scale: "Měřítko",
                customtext: "Vlastní text",
                usegametitle: "Použít název hry",
                customfont: "Vlastní písmo"
            }
        },
        sound: {
            title: "Zvuk",
            content: {
                soundmode: "Režim zvuku",
                file: "Soubor",
                folder: "Náhodné",
                soundfile: "Zvukový soubor",
                sounddir: "Složka zvuku",
                volume: "Hlasitost"
            }
        },
        style: {
            title: "Styl",
            content: {
                bgstyle: "Styl pozadí",
                solid: "Plný",
                gradient: "Přechod",
                img: "Obrázek",
                gameart: "Herní umění",
                gradientangle: "Úhel přechodu",
                bgimg: "Obrázek pozadí",
                bgimgbrightness: "Jas",
                brightness: "Jas",
                blur: "Rozmazání",
                roundness: "Zaoblení",
                fontsize: "Velikost písma",
                opacity: "Průhlednost",
                bgonly: "Pouze pozadí",
                glow: "Záře",
                glowcolor: "Barva",
                glowsize: "Velikost",
                glowx: "Horizontální Posun",
                glowy: "Vertikální Posun",
                glowopacity: "Průhlednost",
                glowanim: "Animace",
                glowspeed: "Rychlost",
                off: "Žádný",
                pulse: "Puls",
                rainbow: "Duha",
                mask: "Maska",
                maskimg: "Obrázek masky",
                outline: "Obrys",
                outlinecolor: "Barva obrysu",
                outlinewidth: "Šířka obrysu",
                dashed: "Čárkovaný",
                dotted: "Tečkovaný"
            }
        },
        colors: {
            title: "Barvy",
            content: {
                primarycolor: "Primární barva",
                secondarycolor: "Sekundární barva",
                tertiarycolor: "Terčiární barva",
                fontcolor: "Barva písma",
                fontoutline: "Obrys písma",
                fontoutlinecolor: "Barva obrysu písma",
                fontshadow: "Stín písma",
                fontshadowcolor: "Barva stínu písma"
            }
        },
        icons: {
            title: "Ikony",
            content: {
                iconroundness: "Zaoblení ikony",
                plat: "100% Logo",
                usegameicon: "Použít ikonu hry",
                logo: "Logo",
                decoration: "Dekorace",
                showdecoration: "Zobrazit dekoraci",
                rarity: "Vzácnost",
                showhiddenicon: "Zobrazit skrytou ikonu",
                hiddenicon: "Skrytá ikona",
                replacelogo: "Nahradit logo"
            }
        },
        position: {
            title: "Pozice",
            content: {
                pos: "Pozice na obrazovce",
                usecustompos: "Použít vlastní pozici",
                setcustompos: "Nastavit",
                resetcustompos: "Resetovat"
            }
        },
        theme: {
            title: "Téma",
            content: {
                updatetheme: "Aktualizovat Téma",
                savetheme: "Uložit téma",
                sub: [
                    `Uložená <span class="hl">Uživatelská témata</span> mohou být vybrána z nabídky <span class="hl">Vybrat téma</span> na domovské obrazovce.`,
                    `Ujistěte se, že <span class="hl">Název tématu</span> je <u>jedinečný</u> - název, který odpovídá existujícímu tématu <u>přepíše předchozí</u>!`
                ],
                placeholder: "Název tématu",
                theme: "Téma",
                importtheme: "Importovat téma",
                import: "Importovat",
                importsub: [
                    `Importovat uživatelem vytvořený <span class="hl">soubor tématu</span>`,
                    `<span class="hl">Importovaná témata</span> budou automaticky načtena po úspěšném importu a mohou být vybrána z nabídky <span class="hl">Výběr tématu</span>`,
                ],
                importidle: `Vyberte <span class="hl">soubor tématu</span> k importu`,
                importcopied: `Téma úspěšně zkopírováno`,
                importrenamed: `Téma úspěšně přejmenováno`,
                importextracted: `Téma úspěšně extrahováno`,
                importrewriting: `Přepisování cest k souborům tématu...`,
                importconverting: `Konverze tématu...`,
                importcreating: `Vytváření tématu...`,
                importdone: `Téma úspěšně importováno`,
                importfailed: `Chyba při importu vybraného souboru tématu!`,
                exporttheme: "Exportovat téma",
                export: "Exportovat"
            }
        }
    },
    logwin: {
        content: {
            tagline: "Zde je, co se stalo od spuštění aplikace v",
            copylog: "Kopírovat obsah záznamu"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>Jste si jisti?</span>
                    <span>Všechna dříve nakonfigurovaná data, <u>včetně přizpůsobení</u>, budou resetována na výchozí hodnoty.</span>
                    <span>🛑 Toto nelze vrátit zpět!</span>
                </div>
            `,
            reset: "Resetovat"
        }
    },
    error: {
        content: {
            subtitle: "Aplikace Steam Achievement Notifier narazila na problém a musí být uzavřena.",
            details: "Zde jsou podrobnosti o chybě:",
            sub: "Klikněte na tlačítka níže, abyste tento problém nahlásili prostřednictvím vaší preferované platformy.",
            report: "Nahlásit",
            log: "Záznam aplikace",
            exit: "Opustit"
        }
    },    
    tooltips: {
        game: "Hra, pro kterou jsou aktuálně sledovány achievementy",
        usertheme: "Vyberte předtím uložené téma",
        customise: "Přizpůsobte oznámení o achievementech",
        test: "Zobrazit testovací oznámení včetně přizpůsobení",
        kofi: "Přispějte na Ko-Fi!",
        discord: "Připojte se na Discord!",
        github: "Nahlásit problém",
        lang: "Vyberte jazyk uživatelského rozhraní používaný v aplikaci",
        steamlang: `Pokuste se načíst překlady umístěné v aplikačních souborech Steamu, aby se zobrazily informace o úspěších ve zvoleném jazyce uživatele v klientu Steamu<br><br><span class="ttdesc">Tato možnost se pokusí najít překlady v souboru JSON uloženém v aplikačních datech Steamu. Pokud nelze najít překlad pro aktuální úspěch, místo toho se zobrazí informace o úspěchu získané ze Steamworks.</span>`,
        maxsteamlangretries: `Počet pokusů (za každých 100 ms) o nalezení platných překladů pro aktuální úspěch<br><br><span class="ttdesc">Steam aktuálně ukládá jen malé množství dat o úspěších do souboru JSON spojeného s každou hrou. Jakékoliv úspěchy, které nejsou v tomto souboru, budou přidány po jejich odemčení.<br><br>Vzhledem k tomu, že přidání nových dat může nějaký čas trvat, zvýšení této hodnoty zvýší pravděpodobnost, že se najdou překlady pro aktuální úspěch, ale může to také zpozdit zobrazení oznámení na obrazovce o čas vypočítaný tímto nastavením.<br><br>Pokud se nepodaří najít platné překlady pro aktuální úspěch, překládání se vrátí na jazyk určený ve Steamworks.</span>`,
        desktop: "Přepnout zástupce na ploše pro spuštění aplikace",
        startwin: "Spustit Steam Achievement Notifier automaticky po přihlášení",
        startmin: "Po spuštění skrýt okno aplikace v uživatelském rozhraní, dokud není otevřeno z lišty systému",
        nohwa: `Vypnout hardwarové zrychlení, což může zlepšit výkon na systémech s nižšími zdroji nebo systémech bez dedikované GPU<br><br><span class="ttdesc">Aplikace se restartuje po povolení/zakázání této možnosti</span>`,
        litemode: "Vypnout všechny interaktivní prvky uživatelského rozhraní a poskytnout pouze omezenou funkčnost aplikace prostřednictvím ikony v liště systému. Může zlepšit využití prostředků aplikace",
        rarity: "Procento, při kterém budou spouštěna oznámení o vzácných achievementech. Jakýkoli achievement s procentem odemknutí vyšším než tato hodnota bude zobrazen jako hlavní oznámení",
        showpercent: "Zobrazit procento odemknutí achievementu v oznámení pro vybrané typy",
        soundonly: "Vypnout oznámení a pouze přehrát zvuky nastavené pomocí přizpůsobovače",
        extwin: "Vytvořit skryté pozadí okna, které duplikuje všechna aktuálně zobrazená oznámení na obrazovce. Toto okno lze pak přidat jako zdroj pro zachycení okna do streamovacího softwaru, například OBS",
        audiosrc: "Vyberte zdroj (nebo vypněte) zvuk generovaný aplikací",
        nowtracking: "Zobrazit oznámení upozorňující uživatele, že jsou sledovány achievementy pro běžící hru",
        nowtrackingscale: `Nastavte velikost upozornění na sledování`,
        nowtrackingpos: `Nastavte polohu upozornění na sledování`,
        shortcuts: "Spustit testovací oznámení pomocí klávesové zkratky. Zkratky lze přizpůsobit pro každý typ oznámení",
        noiconcache: `Zakáže mezipaměť ikon úspěchů při spouštění her.<br><br><span class="ttdesc">To může výrazně zlepšit výkon aplikace při spouštění her a také vyřešit problémy s sledováním her, které mají velké množství úspěchů. Nicméně v ojedinělých případech může zakázání mezipaměti ikon způsobit, že ikony úspěchů v oznámeních chybí</span>`,
        steamss: "Po odemknutí achievementu pořídit snímek obrazovky ve službě Steam",
        screenshots: "Vyberte typ dalšího média, které se vytvoří při zobrazení oznámení",
        monitors: "Monitor, který bude zachycen při pořizování snímku obrazovky",
        hdrmode: `Pořizování snímků obrazovky pomocí metody kompatibilní s monitory používajícími High Dynamic Range (HDR)`,
        ovpos: "Pozice překryvu oznámení ve snímku obrazovky",
        ovmatch: "Shoduje se s pozicí na obrazovce nastavenou v přizpůsobovači pro tento typ oznámení",
        ovpath: "Umístění, kam budou uloženy snímky obrazovky generované touto možností",
        ssdelay: "Přidat prodlevu od okamžiku, kdy dojde k oznámení, do okamžiku, kdy je pořízen snímek obrazovky",
        sspreview: "Zobrazit náhled, jak bude snímek obrazovky vypadat po uložení",
        noanim: "Vypnout všechny animace oken a přechodové efekty v aplikaci",
        noupdatedialog: `Zabraňte automatickému zobrazení a zaměření dialogu <span class="hl">Dostupná aktualizace</span><br><br><span class="ttdesc">Dialog stále můžete zobrazit kliknutím na tlačítko aktualizace, pokud je k dispozici</span>`,
        nvda: "Povolit kopírování informací o achievementu do schránky při odemknutí achievementu, aby je bylo možné číst pomocí čtečky obrazovky, například NVDA",
        tooltips: "Zobrazit popisky při najetí myší na určité prvky uživatelského rozhraní",
        pollrate: `Nastavit interval aktualizace dat o úspěších během hry<br><br><span class="ttdesc">Výkon může stoupat/klesat v závislosti na hodnotě nebo hardwarových zdrojích systému. Vyšší hodnoty obvykle znamenají nižší zátěž systému, ale mohou způsobit zpoždění upozornění</span>`,
        initdelay: `Nastavte zpoždění mezi detekcí aktuálního <span class="hl">AppID</span> a zahájením sledování procesů/úspěchů<br><br><span class="ttdesc">Zvýšení této hodnoty může zabránit scénářům, kdy Steam není schopen spustit aktuální hru (kvůli inicializaci aplikace ve Steamworks před spuštěním hry)</span><br><br><span class="ttdesc">Alternativně lze zvýšení této hodnoty také použít k obejití nesprávné detekce procesů spouštění před hrou</span>`,
        releasedelay: `Nastavuje, jak dlouho bude proces pozadí čekat na restart po uvolnění aktuální hry. Ovlivňuje jak automatické sledování procesu, tak ručně propojené hry.<br><br><span class="ttdesc">Umožňuje delší časový rámec pro úplné uvolnění Steamworks z aplikace. Zvýšení této hodnoty může zabránit neobvyklému chování, jako je sledování dříve uzavřené hry</span>`,
        maxretries: `Nastavuje maximální počet pokusů o propojení běžícího procesu s detekovaným AppID. Ovlivňuje jak automatické sledování procesu, tak ručně propojené hry.<br><br><span class="ttdesc">Pokusy o propojení se provádějí každou sekundu. Pokud běžící proces není po tomto počtu pokusů propojen s aktuálním AppID, bude vrácen neplatný proces. V takových případech bude hra muset být uvolněna ručně pomocí Oznamovací oblasti systému > Možnosti > Uvolnit Hru</span>`,
        debug: "Otevřete Panel Ladění, který zobrazuje podrobné informace o sledování procesů",
        userust: "Použijte alternativní funkci založenou na Rust k ověření, zda jsou sledované herní procesy aktuálně spuštěny na systému. Když není zaškrtnuto, bude místo toho použita výchozí kontrola procesů založená na NodeJS.",
        notifydebug: "Vytvořit okno DevTools pro všechna oznámení. Užitečné pro ladění/problémování problémů s oznámeními",
        usecustomfiles: "Povoluje načítání uživatelsky přizpůsobitelných souborů pro oznámení. Běžným uživatelům se doporučuje opatrnost",
        showcustomfiles: "Otevřít umístění uživatelsky přizpůsobitelných souborů",
        log: "Otevřít okno s protokolem aplikace, které zobrazuje informace o činnosti procesu, varování a chyby",
        reset: "Odstranit všechna konfigurační data a restartovat aplikaci",
        playback: "Pozastavit/pokračovat v animaci náhledu oznámení",
        replay: "Restartovat animaci náhledu oznámení",
        preset: "Vyberte přednastavení oznámení pro přizpůsobení",
        iconanim: "Přepnout ohraničení a animaci vzácné ikony",
        alldetails: "Zobrazit všechny textové prvky v oznámení, včetně těch, které jsou ve výchozím nastavení skryté pro toto přednastavení",
        usepercent: "Zobrazit procento odemknutí úspěchu místo hodnoty XP/S",
        displaytime: "Nastavit počet sekund, po které bude oznámení zobrazeno",
        scale: "Zvětšit nebo zmenšit velikost oznámení",
        customtext: "Nastavit vlastní zprávu, která se zobrazí v oznámení",
        usegametitle: "Zobrazit název aktuální hry v oznámení",
        customfont: "Načíst vlastní písmo, které se použije v oznámení",
        soundmode: "Vyberte buď jediný zvukový soubor nebo náhodně vybraný zvukový soubor z adresáře obsahujícího více zvukových souborů, když dojde k oznámení",
        soundfile: "Vyberte zvukový soubor, který se přehraje při oznámení",
        sounddir: "Vyberte složku, ze které se náhodně vybere zvukový soubor při oznámení",
        volume: "Nastavit hlasitost přehrávání zvukového souboru",
        preview: "Zobrazit náhled vybraného zvukového souboru nebo náhodně vybraného zvukového souboru z adresáře",
        bgstyle: "Vyberte styl pozadí oznámení",
        gradientangle: "Nastavit úhel přechodu",
        bgimg: "Načíst obrázkový soubor, který se použije jako pozadí oznámení",
        bgimgbrightness: "Nastavte jas obrázku použitému jako pozadí upozornění",
        brightness: "Nastavit jas použitého herního umění jako pozadí oznámení",
        blur: "Nastavte úroveň rozmazání aplikované na pozadí oznámení",
        roundness: "Nastavit zaoblení okrajů oznámení",
        fontsize: "Nastavit velikost písma použitého v oznámení",
        opacity: "Nastavit celkovou průhlednost oznámení",
        bgonly: "Nastavit průhlednost pouze pro pozadí oznámení a ponechat ostatní prvky na plnou průhlednost",
        glow: "Povolit efekt záření, který obklopuje oznámení",
        glowcolor: "Nastavte barvu efektu záření",
        glowsize: "Nastavte velikost efektu záření",
        glowx: "Posuňte polohu efektu záře horizontálně",
        glowy: "Posuňte polohu efektu záře vertikálně",
        glowopacity: "Nastavte průhlednost efektu záře",
        glowanim: "Vyberte přednastavenou animaci, která se má aplikovat na efekt záření",
        glowspeed: "Nastavte rychlost animace aplikované na efekt záření",
        mask: "Povolit maskování částí oznámení vlastním obrázkem",
        maskimg: `Načíst soubor s obrázkem, který se má použít jako maska<br><br><span class="ttdesc">V CSS, <code class="ttcode">mask-mode: alpha</code> pracuje opačným způsobem, než je obvykle očekáváno - oblasti průhlednosti v souboru s obrázkem budou zastíněny a černé/šedé oblasti umožní viditelnost prvků pod nimi</span>`,
        outline: "Vyberte typ obrysu, který se zobrazí kolem oznámení",
        outlinecolor: "Nastavte barvu obrysu kolem oznámení",
        outlinewidth: "Nastavte šířku obrysu kolem oznámení",
        primarycolor: "Nastavit primární barvu oznámení",
        secondarycolor: "Nastavit sekundární barvu oznámení",
        tertiarycolor: "Nastavit terciární barvu oznámení",
        fontcolor: "Nastavit barvu všech textů zobrazených v oznámení",
        fontoutline: "Přidat ohraničení ke všem textům zobrazeným v oznámení",
        fontoutlinecolor: "Nastavit barvu ohraničení textu",
        fontshadow: "Přidat stín ke všem textům zobrazeným v oznámení",
        fontshadowcolor: "Nastavit barvu stínu textu",
        iconroundness: "Nastavit zaoblení achievement/game ikony zobrazené v oznámení",
        plat: "Načíst obrázkový soubor, který se použije jako ikona 100%",
        usegameicon: "Nahradit výchozí ikonu oznámení ikonou aktuální hry",
        showhiddenicon: "Zobrazit obrázek označující skrytý úspěch v oznámení",
        hiddenicon: "Načíst soubor s obrázkem k nahrazení ikony skrytého úspěchu",
        logo: "Načíst obrázkový soubor pro nahrazení ikony loga",
        decoration: "Načíst obrázkový soubor pro nahrazení ikony dekorace",
        showdecoration: "Přepnout viditelnost ikony dekorace",
        replacelogo: "Nahraďte ikonu loga v oznámení vybranou dekorací",
        pos: "Nastavit pozici oznámení na obrazovce",
        usecustompos: "Povolit vlastní umístění pro oznámení",
        setcustompos: "Nastavit vlastní pozici pro oznámení",
        resetcustompos: "Obnovit pozici oznámení na výchozí vlastní pozici",
        updatetheme: "Aktualizovat aktuální Téma s vybranými možnostmi přizpůsobení",
        savetheme: "Uložit všechny nakonfigurované možnosti přizpůsobení jako nové téma",
        visibilitybtn: "Přepnout viditelnost prvku v náhledech nastavení a testovacích oznámeních",
        delbtn: "Obnovit prvek na výchozí hodnoty",
        link: `Otevřít <span class="hl">Menu Správy Propojených Her</span>`,
        imgpath: "Místo, kam budou uloženy obrázky oznámení generované touto možností",
        linkedgames: `Přeskočit <span class="hl">automatické sledování procesů</span> pro konkrétní hry ve službě Steam<br><br><span class="ttdesc">Tuto možnost by měli používat pouze ve velmi specifických případech. Uživatelé by tuto možnost neměli používat za běžných okolností!</span>`,
        exclusionlist: `Zabránit sledování úspěchů v konkrétních hrách ve službě Steam aplikací<br><br><span class="ttdesc">Tuto možnost by měli používat pouze ve velmi specifických případech. Uživatelé by tuto možnost neměli používat za běžných okolností!</span>`,
        ovx: "Posunout upozornění zobrazené na snímku obrazovky horizontálně",
        ovy: "Posunout upozornění zobrazené na snímku obrazovky vertikálně",
        importtheme: `Importovat úpravy prostřednictvím uživatelem vytvořeného <span class="hl">souboru tématu</span>`,
        exporttheme: `Exportovat aktuálně vybrané <span class="hl">téma</span> k sdílení<br><br><span class="ttdesc">Před pokusem o export si prosím ověřte, že je vybráno požadované <span class="hl">téma</span> (pomocí nabídky <span class="hl">Výběr tématu</span>). Ujistěte se také, že byly úpravy uloženy ve vybraném <span class="hl">tématu</span> (pomocí nabídky <span class="hl">Uložit téma</span>)<br><br><u>Veškeré úpravy, které nebyly dosud uloženy v aktuálním <span class="hl">tématu</span>, nebudou exportovány!</u></span>`,
        webhooks: "Použijte URL Webhooku k odesílání na Discord server při každém odemknutí úspěchu",
        webhookurl: `Nastavte <span class="hl">URL Webhooku</span> pro požadovaný Discord server<br><br><span class="ttdesc"> <span class="hl">URL Webhooku</span> slouží k odesílání na Discord server/kanál jménem uživatele nebo aplikace. Aby bylo možné nastavit nový Webhook pro Discord server, uživatel musí mít v požadovaném serveru roli, která umožňuje vytváření Webhooků<br><br><u>Při použití této možnosti je vyžadována URL Webhooku</u><br><br>Pro více informací se podívejte do oficiální dokumentace Discordu</span>`,
        unlockmsg: "Nastavte polohu zprávy o odemknutí/vlastního textu v $type",
        title: "Nastavte polohu názvu úspěchu v $type",
        desc: "Nastavte polohu popisu úspěchu v $type",
        notification: "oznámení",
        screenshot: "snímek obrazovky",
        percentpos: "Nastavte polohu procenta vzácnosti v $type",
        sspercentpos: "Nastavte polohu procenta vzácnosti v $type",
        hiddeniconpos: "Nastavte polohu ikony skrytého/tajného úspěchu v $type",
        sshiddeniconpos: "Nastavte polohu ikony skrytého/tajného úspěchu v $type",
        decorationpos: "Nastavte polohu dekorativního prvku v $type",
        ssdecorationpos: "Nastavte polohu dekorativního prvku v $type",
        percentbadge: "Zobrazit procento odemknutí v odznaku umístěném nad ikonou úspěchu/hry",
        sspercentbadge: "Zobrazit procento odemknutí v odznaku umístěném nad ikonou úspěchu/hry",
        percentbadgepos: "Nastavit pozici odznaku",
        sspercentbadgepos: "Nastavit pozici odznaku",
        percentbadgecolor: "Nastavit barvu pozadí odznaku",
        sspercentbadgecolor: "Nastavit barvu pozadí odznaku",
        percentbadgefontsize: "Nastavit velikost odznaku",
        sspercentbadgefontsize: "Nastavit velikost odznaku",
        percentbadgeroundness: "Nastavit zaoblení odznaku",
        sspercentbadgeroundness: "Nastavit zaoblení odznaku"
    },
    update: {
        updateavailable: "Aktualizace je k dispozici",
        sub: [
            `<span id="newversion"></span>`,
            "Je k dispozici nová aktualizace pro Steam Achievement Notifier!",
            `Plné poznámky k vydání naleznete na <span id="discordreleasenotes"></span> a <span id="githubreleasenotes"></span>`
        ],
        update: "Aktualizace"
    },
    linkgame: {
        content: {
            exepath: "Cesta k spustitelnému souboru",
            managesub: [
                `Ručně propojte <span class="hl">spustitelný soubor</span> hry s konkrétním <span class="hl">AppID</span> nebo <span class="hl">zrušte propojení</span> existujícího`,
                `Steam Achievement Notifier již nebude používat <span class="hl">automatické sledování procesu</span> pro žádné <span class="hl">propojené hry</span> - místo toho bude sledován určený <span class="hl">spustitelný soubor</span>, pokud je zjištěn odpovídající <span class="hl">AppID</span>`,
                `<span class="hl" id="appidhelp"><u>Jak najdu AppID hry ve službě Steam?</u></span>`
            ],
            linknew: "Nová propojená hra",
            linknewsub: [
                `Vytvořte nový odkaz mezi <span class="hl">spustitelným souborem hry</span> a příslušným <span class="hl">AppID</span>`,
                `Po vytvoření mohou být odkazy <span class="hl">zrušeny</span> prostřednictvím předchozího dialogu <span class="hl">Spravovat propojené hry</span>`
            ],
            link: "Propojit",
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Přidat <span class="hl">AppID</span> jakékoli hry ve službě Steam do <span class="hl">seznamu vyloučení</span>`,
                `Steam Achievement Notifier se nebude snažit sledovat údaje o úspěších pro jakékoli <span class="hl">AppID</span> hry přidané do <span class="hl">seznamu vyloučení</span>`,
                `<span class="hl" id="appidhelp"><u>Jak najdu AppID hry ve službě Steam?</u></span>`
            ],
            exclusionnew: "Nové vyloučení",
            exclusionnewsub: [
                `Zadejte <span class="hl">AppID</span>, které chcete přidat do <span class="hl">seznamu vyloučení</span>`
            ]
        }
    }
}

export const missingdepssub = (opt: string, dep: string) => [
    `Zdá se, že se snažíte povolit možnost <span class="hl">${opt}</span>. Nicméně v systému Linux nelze povolit pořizování snímků obrazovky bez předchozí instalace balíčku <code class="dialogcode">${dep}</code>`,
    `Prosím spusťte <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> pro instalaci této závislosti. Tím zajistíte možnost pořizování snímků obrazovky na tomto zařízení`
]