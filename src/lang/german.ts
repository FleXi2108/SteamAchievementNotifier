export const translations = {
    global: {
        main: "Haupt",
        rare: "Selten",
        plat: "100%",
        topleft: "Oben Links",
        topcenter: "Oben Mitte",
        topright: "Oben Rechts",
        bottomleft: "Unten Links",
        bottomcenter: "Unten Mitte",
        bottomright: "Unten Rechts",
        ok: "OK",
        preview: "Vorschau",
        save: "Speichern",
        back: "Zurück",
        settings: "Einstellungen",
        appversion: "App-Version",
        image: "Bild",
        audio: "Audio",
        folder: "Ordner",
        font: "Schriftart",
        select: "Auswählen",
        gametitle: "Spiel-Titel",
        congrats: "Herzlichen Glückwunsch!",
        achievementunlocked: "Erfolg freigeschaltet",
        gamecomplete: "100% Abgeschlossen",
        achievementdesc: "Auf die Schaltfläche Testbenachrichtigung anzeigen geklickt",
        gamecompletedesc: "Du hast alle Erfolge freigeschaltet!",
        defaultcustomfont: "Standard (Keine Schriftart ausgewählt)",
        defaultsoundfile: "Standard (Keine Datei ausgewählt)",
        defaultsounddir: "Standard (Kein Ordner ausgewählt)",
        nowtracking: "Verfolgt jetzt Erfolge für:",
        nopreview: "Vorschau nicht verfügbar für natives Betriebssystem",
        options: "Optionen",
        resetwindow: "Fenster Zurücksetzen",
        show: "Anzeigen",
        exit: "Ausgang",
        releasegame: "Spiel Freigeben",
        releasegamesub: [
            `Starten Sie den Hintergrundprozess des Workers neu und geben Sie das aktuelle Spiel zur Verfolgung frei`,
            `Versuchen Sie diese Option, wenn Sie kürzlich ein Spiel geschlossen haben, aber Steam zeigt es immer noch als laufend an, oder wenn Steam Achievement Notifier immer noch ein bereits geschlossenes Spiel als verfolgt anzeigt`
        ],
        noupdateavailable: "Kein Update Verfügbar",
        latestversion: "Neueste Version Installiert",
        missingdeps: "Fehlende Abhängigkeit",
        restartapp: "App Neu Starten",
        restartappsub: [
            `Wenn die Dinge nicht richtig funktionieren, verwenden Sie diese Option, um die App zu schließen und neu zu öffnen`,
            `Wenn das Problem nach dem Neustart der App weiterhin besteht, erwägen Sie bitte, es über die integrierten Links auf dem Startbildschirm zu melden`
        ],
        suspend: "Anhalten",
        resume: "Fortsetzen",
        new: "Neu...",
        nodata: "Keine Daten",
        findappid: "AppID finden",
        findappidsub: [
            `Jedes Steam-Spiel hat eine eindeutige Nummer - die <span class="hl">AppID</span>. Sie können die zugehörige AppID eines beliebigen Steam-Spiels finden, indem Sie eines der folgenden überprüfen:`,
            `Im <span class="hl">Steam-Client</span> mit der rechten Maustaste auf ein Spiel in Ihrer <span class="hl">Bibliothek</span> klicken und <i>Eigenschaften</i> > <i>Updates</i> auswählen - die AppID wird hier aufgelistet`,
            `Die <span class="hl">URL</span> der <span class="hl">Shop-Seite</span> des Spiels - es handelt sich um die Zahl, die nach <span class="hl">app/</span> aufgelistet ist: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `Websites wie <span class="hl">SteamDB</span> - der Abschnitt <span class="hl">App-Informationen</span> listet die AppID für jedes Spiel auf`
        ],
        elemselector: "Benachrichtigungselemente",
        unlockmsg: "Freischalt-Nachricht",
        title: "Erfolgstitel",
        desc: "Erfolgsbeschreibung",
        hiddeniconpos: "Verstecktes Symbol",
        sshiddeniconpos: "Verstecktes Symbol",
        decorationpos: "Dekoration",
        ssdecorationpos: "Dekoration",
        percentpos: "Seltenheitsprozentsatz",
        sspercentpos: "Seltenheitsprozentsatz",
        noexe: "Spiel-EXE nicht gefunden!",
        noexesub: `Wählen Sie Optionen > Spiel freigeben aus dem Systemtray, um zu beenden`,
        webhookunlockmsg: "$user hat einen Erfolg freigeschaltet",
        webhookingame: "in $gamename"
    },
    app: {
        content: {
            game: "Kein Spiel Erkannt",
            customise: "Anpassen",
            test: "Testbenachrichtigung Anzeigen"
        }
    },
    settings: {
        language: {
            title: "Sprache",
            content: {
                steamlang: "Erfolge in die Steam-Sprache übersetzen",
                maxsteamlangretries: "Maximale Anzahl an Übersetzungsversuchen"
            }
        },
        os: {
            title: "Betriebssystem",
            content: {
                desktop: "Desktop-Verknüpfung Erstellen",
                startwin: "Beim Anmelden Starten",
                startmin: "Minimiert Starten",
                nohwa: "Hardwarebeschleunigung Deaktivieren",
                litemode: "Lite-Modus"
            }
        },
        notifications: {
            title: "Benachrichtigungen",
            content: {
                rarity: "Seltenheitsprozentsatz",
                rareonly: "Nur Selten",
                all: "Alle",
                off: "Aus",
                showpercent: "Prozentsatz Anzeigen",
                soundonly: "Nur Ton",
                extwin: "Stream-Benachrichtigungen",
                audiosrc: "Audioquelle",
                notify: "Benachrichtigung",
                app: "Anwendung",
                nowtracking: "Verfolgungshinweis anzeigen",
                nowtrackingscale: "Verfolgungsskala",
                nowtrackingpos: "Position verfolgen",
                shortcuts: "Benachrichtigungs-Verknüpfungen",
                noiconcache: "Icon-Cache deaktivieren",
                webhooks: "Auf Discord-Server posten",
                webhookurl: `Webhook-URL`,
                webhookcaution: `Indem Sie diese Option aktivieren und einen gültigen Discord-Webhook-Link angeben, erklären Sie sich damit einverstanden, dass Sie verstehen, dass <u>alle Erfolgs- und Spieledaten des aktuellen Steam-Benutzers</u> über den angegebenen Discord-Server-Link gepostet werden.<br><br>Wenn Sie nicht möchten, dass der Steam Achievement Notifier diese Informationen in Ihrem Namen veröffentlicht, deaktivieren Sie bitte diese Option.`,
                webhooklaststatus: "Letzter Status"
            }
        },
        media: {
            title: "Medien",
            content: {
                steamss: "Steam-Screenshot Machen",
                screenshots: "Zusätzliche Medien",
                off: "Aus",
                overlay: "Screenshot mit Benachrichtigungs-Overlay",
                monitors: "Screenshot-Quelle",
                hdrmode: "HDR-Modus",
                ovpos: "Overlay-Position",
                ovmatch: "Anpassungsposition Anpassen",
                ovx: "Horizontaler Versatz",
                ovy: "Vertikaler Versatz",                
                ovpath: "Screenshot-Pfad",
                ssdelay: "Screenshot-Verzögerung",
                notifyimg: "Benachrichtigungsbild",
                imgpath: "Bildpfad"
            }
        },
        games: {
            title: "Spiele",
            content: {
                linkedgames: "Verknüpfte Spiele",
                exclusionlist: "Ausschlussliste"
            }
        },
        accessibility: {
            title: "Barrierefreiheit",
            content: {
                noanim: "App-Fensteranimationen Deaktivieren",
                noupdatedialog: "Update-Dialog deaktivieren",
                nvda: "NVDA-Unterstützung Aktivieren",
                tooltips: "Tooltips Anzeigen"
            }
        },
        advanced: {
            title: "Erweitert",
            content: {
                pollrate: "Abfrageintervall",
                initdelay: "Verzögerungsverfolgung",
                releasedelay: "Veröffentlichungsverzögerung",
                maxretries: "Maximale Wiederholungsversuche",
                debug: "Debug-Panel",
                userust: "Alternativer Verarbeitungsmodus",
                notifydebug: "Debug-Benachrichtigungen Anzeigen",
                usecustomfiles: "Benutzerdefinierte App-Dateien Verwenden",
                showcustomfiles: "Benutzerdefinierte App-Dateien Anzeigen"
            }
        },        
        misc: {
            title: "Verschiedenes",
            content: {
                checkforupdates: "Nach Updates Suchen",
                log: "Anwendungsprotokoll",
                reset: "App Zurücksetzen"
            }
        }
    },    
    customiser: {
        preset: {
            title: "Voreinstellung",
            content: {
                preset: "Benachrichtigungsvoreinstellung",
                iconanim: "Seltene Icon-Animation",
                alldetails: "Alle Details anzeigen",
                usepercent: "Prozent verwenden",
                displaytime: "Anzeigedauer",
                scale: "Skalierung",
                customtext: "Benutzerdefinierter Text",
                usegametitle: "Spielname verwenden",
                customfont: "Benutzerdefinierte Schriftart"
            }
        },
        sound: {
            title: "Ton",
            content: {
                soundmode: "Tonmodus",
                file: "Datei",
                folder: "Zufällig",
                soundfile: "Tondatei",
                sounddir: "Tonordner",
                volume: "Lautstärke"
            }
        },
        style: {
            title: "Stil",
            content: {
                bgstyle: "Hintergrundstil",
                solid: "Einfarbig",
                gradient: "Verlauf",
                img: "Bild",
                gameart: "Spielgrafik",
                gradientangle: "Verlaufswinkel",
                bgimg: "Hintergrundbild",
                bgimgbrightness: "Helligkeit",
                brightness: "Helligkeit",
                blur: "Unschärfe",
                roundness: "Abgerundetheit",
                fontsize: "Schriftgröße",
                opacity: "Deckkraft",
                bgonly: "Nur Hintergrund",
                glow: "Leuchten",
                glowcolor: "Farbe",
                glowsize: "Größe",
                glowx: "Horizontale Verschiebung",
                glowy: "Vertikale Verschiebung",
                glowopacity: "Deckkraft",
                glowanim: "Animation",
                glowspeed: "Geschwindigkeit",
                off: "Aus",
                pulse: "Pulsieren",
                rainbow: "Regenbogen",
                mask: "Maske",
                maskimg: "Maskenbild",
                outline: "Umriss",
                outlinecolor: "Umrissfarbe",
                outlinewidth: "Umrissbreite",
                dashed: "Gestrichelt",
                dotted: "Gepunktet"
            }
        },
        colors: {
            title: "Farben",
            content: {
                primarycolor: "Primärfarbe",
                secondarycolor: "Sekundärfarbe",
                tertiarycolor: "Tertiärfarbe",
                fontcolor: "Schriftfarbe",
                fontoutline: "Schriftumrandung",
                fontoutlinecolor: "Farbe der Schriftumrandung",
                fontshadow: "Schriftschatten",
                fontshadowcolor: "Farbe des Schriftschattens"
            }
        },
        icons: {
            title: "Symbole",
            content: {
                iconroundness: "Symbole abrunden",
                plat: "100%-Logo",
                usegameicon: "Spiel-Symbol verwenden",
                logo: "Logo",
                decoration: "Dekoration",
                showdecoration: "Dekoration anzeigen",
                rarity: "Seltenheit",
                showhiddenicon: "Verstecktes Symbol anzeigen",
                hiddenicon: "Verstecktes Symbol",
                replacelogo: "Logo Ersetzen",
            }
        },
        position: {
            title: "Position",
            content: {
                pos: "Bildschirmposition",
                usecustompos: "Benutzerdefinierte Position verwenden",
                setcustompos: "Festlegen",
                resetcustompos: "Zurücksetzen"
            }
        },
        theme: {
            title: "Thema",
            content: {
                updatetheme: "Thema Aktualisieren",
                savetheme: "Thema speichern",
                sub: [
                    `Gespeicherte <span class="hl">Benutzerthemen</span> können im Menü <span class="hl">Thema auswählen</span> auf dem Startbildschirm ausgewählt werden.`,
                    `Stellen Sie sicher, dass der <span class="hl">Themenname</span> <u>eindeutig</u> ist - ein Name, der mit einem vorhandenen Thema übereinstimmt, <u>überschreibt das vorherige</u>!`
                ],
                placeholder: "Themenname",
                theme: "Thema",
                importtheme: "Thema importieren",
                import: "Importieren",
                importsub: [
                    `Importieren einer vom Benutzer erstellten <span class="hl">Themendatei</span>`,
                    `<span class="hl">Importierte Themen</span> werden nach erfolgreichem Import automatisch geladen und können im Menü <span class="hl">Thema auswählen</span> ausgewählt werden`,
                ],
                importidle: `Wählen Sie eine <span class="hl">Themendatei</span> zum Importieren`,
                importcopied: `Thema erfolgreich kopiert`,
                importrenamed: `Thema erfolgreich umbenannt`,
                importextracted: `Thema erfolgreich extrahiert`,
                importrewriting: `Schreibe Themendateipfade neu...`,
                importconverting: `Konvertiere Thema...`,
                importcreating: `Erstelle Thema...`,
                importdone: `Thema erfolgreich importiert`,
                importfailed: `Fehler beim Importieren der ausgewählten Themendatei!`,
                exporttheme: "Thema exportieren",
                export: "Exportieren"                
            }
        }        
    },
    logwin: {
        content: {
            tagline: "Hier ist, was seit dem Start der App passiert ist um",
            copylog: "Protokollinhalt kopieren"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>Sind Sie sicher?</span>
                    <span>Alle zuvor konfigurierten Daten, <u>einschließlich Anpassungen</u>, werden auf die Standardeinstellungen zurückgesetzt.</span>
                    <span>🛑 Dies kann nicht rückgängig gemacht werden!</span>
                </div>
            `,
            reset: "Zurücksetzen"
        }
    },
    error: {
        content: {
            subtitle: "Steam Achievement Notifier ist auf ein Problem gestoßen und muss geschlossen werden.",
            details: "Hier sind die Fehlerdetails:",
            sub: "Klicken Sie auf die unten stehenden Schaltflächen, um dieses Problem über Ihre bevorzugte Plattform zu melden.",
            report: "Bericht",
            log: "App-Protokoll",
            exit: "Beenden"
        }
    },    
    tooltips: {
        game: "Das Spiel, für das derzeit Erfolge verfolgt werden",
        usertheme: "Wählen Sie ein zuvor gespeichertes Design",
        customise: "Benutzerdefinierte Anpassung der Erfolgsmeldungen",
        test: "Zeigen Sie eine Testbenachrichtigung an, einschließlich aller Anpassungen",
        kofi: "Spenden Sie auf Ko-Fi!",
        discord: "Treten Sie dem Discord bei!",
        github: "Melden Sie ein Problem",
        lang: "Wählen Sie die UI-Sprache, die in der App verwendet wird",
        steamlang: `Versuchen Sie, Übersetzungen aus den Anwendungsdateien von Steam zu laden, um Erfolgsinformationen in der vom Benutzer gewählten Sprache des Steam-Clients anzuzeigen<br><br><span class="ttdesc">Diese Option versucht, Übersetzungen in einer JSON-Datei zu finden, die in den Anwendungsdaten von Steam gespeichert ist. Wenn keine Übersetzung für den aktuellen Erfolg gefunden werden kann, werden stattdessen die von Steamworks abgerufenen Erfolgsinformationen angezeigt.</span>`,
        maxsteamlangretries: `Die Anzahl der Versuche (alle 100ms), um gültige Übersetzungen für den aktuellen Erfolg zu finden<br><br><span class="ttdesc">Steam speichert derzeit nur eine kleine Menge an Erfolgsdaten in der mit jedem Spiel verbundenen JSON-Datei. Alle Erfolge, die nicht in dieser Datei enthalten sind, werden hinzugefügt, nachdem der Erfolg freigeschaltet wurde.<br><br>Da das Hinzufügen neuer Daten Zeit in Anspruch nehmen kann, erhöht eine Erhöhung dieses Werts die Wahrscheinlichkeit, dass Übersetzungsdaten für den aktuellen Erfolg gefunden werden, kann jedoch auch die Anzeige der Benachrichtigung auf dem Bildschirm um die durch diese Einstellung berechnete Zeit verzögern.<br><br>Wenn keine gültigen Übersetzungsdaten für den aktuellen Erfolg gefunden werden können, wird die Übersetzung auf die in Steamworks festgelegte Sprache zurückgesetzt.</span>`,
        desktop: "Schalten Sie eine Verknüpfung auf dem Desktop ein, um die App auszuführen",
        startwin: "Starten Sie Steam Achievement Notifier automatisch nach dem Anmelden",
        startmin: "Nach dem Starten die App-Benutzeroberfläche ausblenden, bis sie aus dem System Tray geöffnet wird",
        nohwa: `Deaktivieren Sie die Hardwarebeschleunigung, um die Leistung auf Systemen mit geringeren Ressourcen oder Systemen ohne dedizierte GPU zu verbessern<br><br><span class="ttdesc">Die App wird nach Aktivierung/Deaktivierung dieser Option neu gestartet</span>`,
        litemode: "Deaktivieren Sie alle interaktiven UI-Elemente und bieten Sie nur begrenzte App-Funktionalität über das System Tray-Symbol. Kann die von der App verbrauchten Ressourcen verbessern",
        rarity: "Der Prozentsatz, bei dem seltene Erfolgsmeldungen ausgelöst werden. Jeder Erfolg mit einem Freischaltungsprozentsatz über diesem Wert wird als Hauptbenachrichtigung angezeigt",
        showpercent: "Zeigen Sie den Freischaltungsprozentsatz des Erfolgs in der Benachrichtigung für die ausgewählten Typen an",
        soundonly: "Deaktivieren Sie Benachrichtigungen und spielen Sie nur Sounds ab, die über den Customiser festgelegt wurden",
        extwin: "Erstellen Sie ein verstecktes Hintergrundfenster, das alle derzeit angezeigten Benachrichtigungen dupliziert. Dieses Fenster kann dann als Fenstererfassungsquelle für Streaming-Software wie OBS hinzugefügt werden",
        audiosrc: "Wählen Sie die Quelle des vom Programm generierten Audios aus (oder deaktivieren Sie es)",
        nowtracking: "Zeigen Sie eine Benachrichtigung an, die den Benutzer darüber informiert, dass Erfolge für ein laufendes Spiel verfolgt werden",
        nowtrackingscale: `Größe der Verfolgungshinweis festlegen`,
        nowtrackingpos: `Legen Sie den Ort der Verfolgungshinweis fest`,
        shortcuts: "Lösen Sie eine Testbenachrichtigung über eine Tastenkombination aus. Die Tastenkombinationen können für jeden Benachrichtigungstyp angepasst werden",
        noiconcache: `Deaktiviert das Zwischenspeichern von Erfolgsymbolen beim Starten von Spielen.<br><br><span class="ttdesc">Dies kann die Leistung der App beim Starten von Spielen erheblich verbessern und auch Probleme mit der Verfolgung von Spielen mit einer großen Anzahl von Erfolgen lösen. Die Deaktivierung des Icon-Caches kann jedoch in seltenen Fällen dazu führen, dass Erfolgssymbole in Benachrichtigungen fehlen</span>`,
        steamss: "Erstellen Sie einen Steam-Screenshot, wenn ein Erfolg freigeschaltet wird",
        screenshots: "Wählen Sie den Typ des zusätzlichen Mediums aus, das erstellt werden soll, wenn eine Benachrichtigung angezeigt wird",
        monitors: "Der Monitor, der erfasst wird, wenn der Screenshot aufgenommen wird",
        hdrmode: `Screenshots aufnehmen mit einer Methode, die mit Monitoren kompatibel ist, die High Dynamic Range (HDR) verwenden`,
        ovpos: "Die Position der Benachrichtigungsüberlagerung im Screenshot",
        ovmatch: "Übereinstimmung mit der im Customiser festgelegten Bildschirmposition für diesen Benachrichtigungstyp",
        ovpath: "Der Speicherort, an dem Screenshots gespeichert werden, die von dieser Option generiert werden",
        ssdelay: "Fügen Sie eine Verzögerung von der Benachrichtigung bis zur Aufnahme des Screenshots hinzu",
        sspreview: "Zeigen Sie eine Vorschau an, wie der Screenshot gespeichert wird",
        noanim: "Deaktivieren Sie alle Fensteranimationen und Übergangseffekte in der App",
        noupdatedialog: `Verhindert das automatische Anzeigen und Fokussieren des <span class="hl">Verfügbare Updates</span>-Dialogs<br><br><span class="ttdesc">Der Dialog kann weiterhin durch Klicken auf die Update-Schaltfläche geöffnet werden, wenn verfügbar</span>`,
        nvda: "Aktivieren Sie das Kopieren von Erfolgsinformationen in die Zwischenablage, wenn ein Erfolg freigeschaltet wird, um von Bildschirmleseprogrammen wie NVDA gelesen zu werden",
        tooltips: "Zeigen Sie Tooltips an, wenn Sie über bestimmte UI-Elemente schweben",
        pollrate: `Legen Sie das Aktualisierungsintervall für Erfolgsdaten während des Spiels fest<br><br><span class="ttdesc">Die Leistung kann je nach Wert oder Systemhardware steigen/abfallen. Höhere Werte führen normalerweise zu einer geringeren Systemlast, können aber auch zu einer stärkeren Verzögerung bei Benachrichtigungen führen</span>`,
        initdelay: `Legen Sie die Verzögerung zwischen der Erkennung der aktuellen <span class="hl">AppID</span> und dem Beginn der Prozess-/Erfolgsverfolgung fest<br><br><span class="ttdesc">Durch Erhöhen dieses Werts können Szenarien vermieden werden, in denen Steam das aktuelle Spiel nicht starten kann (aufgrund der Initialisierung der Anwendung in Steamworks, bevor das Spiel gestartet wurde)</span><br><br><span class="ttdesc">Alternativ kann das Erhöhen dieses Werts auch verwendet werden, um eine falsche Erkennung von Vor-Spielstart-Prozessen zu umgehen</span>`,
        releasedelay: `Legt fest, wie lange der Hintergrundprozess warten soll, um nach der Veröffentlichung des aktuellen Spiels neu zu starten. Beeinflusst sowohl die automatische Prozessüberwachung als auch manuell verknüpfte Spiele.<br><br><span class="ttdesc">Ermöglicht einen längeren Zeitrahmen, um Steamworks vollständig von der App freizugeben. Eine Erhöhung dieses Werts kann ungewöhnliches Verhalten verhindern, wie z.B. das Verfolgen eines zuvor geschlossenen Spiels</span>`,
        maxretries: `Legt die maximale Anzahl von Versuchen fest, um einen laufenden Prozess mit einer erkannten AppID zu verknüpfen. Beeinflusst sowohl die automatische Prozessüberwachung als auch manuell verknüpfte Spiele.<br><br><span class="ttdesc">Verbindungsversuche werden einmal pro Sekunde durchgeführt. Wenn ein laufender Prozess nach dieser Anzahl von Versuchen nicht mit der aktuellen AppID verknüpft ist, wird ein ungültiger Prozess zurückgegeben. In solchen Fällen muss das Spiel manuell über das System-Tray > Optionen > Spiel freigeben freigegeben werden</span>`,
        debug: "Öffnen Sie das Debug-Panel, das detaillierte Prozessverfolgungsinformationen anzeigt",
        userust: "Verwenden Sie eine alternative Rust-basierte Funktion, um zu überprüfen, ob die verfolgten Spielprozesse derzeit auf dem System ausgeführt werden. Wenn nicht aktiviert, wird stattdessen die Standardprozessüberprüfung auf NodeJS-Basis verwendet.",
        notifydebug: "Erstellen Sie ein DevTools-Fenster für alle Benachrichtigungen. Nützlich zum Debuggen/Beheben von Benachrichtigungsproblemen",
        usecustomfiles: "Aktivieren Sie Benachrichtigungen, um benutzerdefinierbare Dateien zu laden. Vorsicht ist für normale Benutzer geboten",
        showcustomfiles: "Öffnen Sie den Speicherort der benutzerdefinierten Dateien",
        log: "Öffnen Sie das App-Protokollfenster, das Informationen über Prozessaktivitäten, Warnungen und Fehler anzeigt",
        reset: "Entfernen Sie alle Konfigurationsdaten und starten Sie die App neu",
        playback: "Pausieren/Fortsetzen der Animation der Benachrichtigungsvorschau",
        replay: "Starten Sie die Animation der Benachrichtigungsvorschau neu",
        preset: "Wählen Sie das zu bearbeitende Benachrichtigungsvorlagen aus",
        iconanim: "Aktivieren/Deaktivieren des animierten Rahmens und der Animation des seltenen Symbols",
        alldetails: "Zeigen Sie alle Textelemente in der Benachrichtigung an, einschließlich der standardmäßig ausgeblendeten Elemente für diese Vorlage",
        usepercent: "Den Freischaltprozentsatz der Leistung anzeigen, anstelle des XP/S-Werts",
        displaytime: "Legen Sie die Anzeigedauer der Benachrichtigung in Sekunden fest",
        scale: "Vergrößern oder verkleinern Sie die Größe der Benachrichtigung",
        customtext: "Legen Sie eine benutzerdefinierte Nachricht fest, die in der Benachrichtigung angezeigt werden soll",
        usegametitle: "Zeigen Sie den Titel des aktuellen Spiels in der Benachrichtigung an",
        customfont: "Laden Sie eine benutzerdefinierte Schriftart, die in der Benachrichtigung verwendet werden soll",
        soundmode: "Wählen Sie entweder eine einzelne Audiodatei oder eine zufällig ausgewählte Audiodatei aus einem Ordner mit mehreren Audiodateien aus, wenn eine Benachrichtigung auftritt",
        soundfile: "Wählen Sie eine Audiodatei aus, die abgespielt werden soll, wenn eine Benachrichtigung auftritt",
        sounddir: "Wählen Sie einen Ordner aus, aus dem eine Audiodatei zufällig ausgewählt wird, wenn eine Benachrichtigung auftritt",
        volume: "Legen Sie die Wiedergabelautstärke der Audiodatei fest",
        preview: "Vorschau der ausgewählten Audiodatei oder einer zufällig ausgewählten Audiodatei aus dem Ordner",
        bgstyle: "Wählen Sie den Stil für den Hintergrund der Benachrichtigung aus",
        gradientangle: "Legen Sie den Winkel des Farbverlaufs fest",
        bgimg: "Laden Sie eine Bilddatei, die als Hintergrund der Benachrichtigung verwendet werden soll",
        bgimgbrightness: "Legen Sie die Helligkeit des Bildes fest, das als Hintergrund für die Benachrichtigung verwendet wird",
        brightness: "Legen Sie die Helligkeit des als Hintergrund der Benachrichtigung verwendeten Spielbildes fest",
        blur: "Legen Sie das Maß an Unschärfe fest, das auf den Hintergrund der Benachrichtigung angewendet wird",
        roundness: "Legen Sie die Rundheit der Benachrichtigungskanten fest",
        fontsize: "Legen Sie die Schriftgröße in der Benachrichtigung fest",
        opacity: "Legen Sie die Gesamttransparenz der Benachrichtigung fest",
        bgonly: "Legen Sie nur die Transparenz für den Benachrichtigungshintergrund fest und behalten Sie andere Elemente bei voller Transparenz",
        glow: "Aktivieren Sie einen Leuchteffekt, der die Benachrichtigung umgibt",
        glowcolor: "Legen Sie die Farbe des Leuchteffekts fest",
        glowsize: "Legen Sie die Größe des Leuchteffekts fest",
        glowx: "Verschieben Sie die Position des Leuchteffekts horizontal",
        glowy: "Verschieben Sie die Position des Leuchteffekts vertikal",
        glowopacity: "Legen Sie die Transparenz des Leuchteffekts fest",
        glowanim: "Wählen Sie eine vordefinierte Animation aus, die auf den Leuchteffekt angewendet werden soll",
        glowspeed: "Legen Sie die Geschwindigkeit der Animation fest, die auf den Leuchteffekt angewendet wird",
        mask: "Aktivieren Sie das Maskieren von Teilen der Benachrichtigung mit einem benutzerdefinierten Bild",
        maskimg: `Laden Sie eine Bilddatei hoch, die als Maske verwendet werden soll<br><br><span class="ttdesc">In CSS funktioniert <code class="ttcode">mask-mode: alpha</code> entgegen der üblichen Erwartung - Bereiche der Transparenz in der Bilddatei werden verdeckt, und schwarze/graue Bereiche lassen die darunterliegenden Elemente sichtbar werden</span>`,
        outline: "Wählen Sie den Typ des Umrisses aus, der um die Benachrichtigung angezeigt werden soll",
        outlinecolor: "Stellen Sie die Farbe des Umrisses um die Benachrichtigung ein",
        outlinewidth: "Stellen Sie die Breite des Umrisses um die Benachrichtigung ein",
        primarycolor: "Legen Sie die Primärfarbe der Benachrichtigung fest",
        secondarycolor: "Legen Sie die Sekundärfarbe der Benachrichtigung fest",
        tertiarycolor: "Legen Sie die Tertiärfarbe der Benachrichtigung fest",
        fontcolor: "Legen Sie die Farbe des in der Benachrichtigung angezeigten Textes fest",
        fontoutline: "Fügen Sie allen in der Benachrichtigung angezeigten Texten eine Kontur hinzu",
        fontoutlinecolor: "Legen Sie die Farbe der Textkontur fest",
        fontshadow: "Fügen Sie allen in der Benachrichtigung angezeigten Texten einen Schatten hinzu",
        fontshadowcolor: "Legen Sie die Farbe des Textschattens fest",
        iconroundness: "Legen Sie die Rundheit des Erfolgs-/Spielsymbols in der Benachrichtigung fest",
        plat: "Laden Sie eine Bilddatei, die als 100%-Symbol verwendet werden soll",
        usegameicon: "Ersetzen Sie das Standardbenachrichtigungssymbol durch das Symbol des aktuellen Spiels",
        showhiddenicon: "Ein Bild anzeigen, das anzeigt, dass die Leistung in der Benachrichtigung versteckt ist",
        hiddenicon: "Eine Bilddatei laden, um das Symbol für die versteckte Leistung zu ersetzen",
        logo: "Laden Sie eine Bilddatei, um das Logo-Symbol zu ersetzen",
        decoration: "Laden Sie eine Bilddatei, um das Dekorationssymbol zu ersetzen",
        showdecoration: "Aktivieren/Deaktivieren der Sichtbarkeit des Dekorationssymbols",
        replacelogo: "Ersetze das Logo-Symbol in der Benachrichtigung durch die ausgewählte Dekoration",
        pos: "Legen Sie die Bildschirmposition der Benachrichtigung fest",
        usecustompos: "Aktivieren Sie die benutzerdefinierte Positionierung für die Benachrichtigung",
        setcustompos: "Legen Sie die benutzerdefinierte Position für die Benachrichtigung fest",
        resetcustompos: "Setzen Sie die Position der Benachrichtigung auf die Standardbenutzerposition zurück",
        updatetheme: "Das aktuelle Thema mit den ausgewählten Anpassungsoptionen aktualisieren",
        savetheme: "Speichern Sie alle konfigurierten Anpassungsoptionen als neues Design",
        visibilitybtn: "Die Sichtbarkeit des Elements in benutzerdefinierten Vorschauen und Testbenachrichtigungen umschalten",
        delbtn: "Das Element auf den Standardwert zurücksetzen",
        link: `Öffne <span class="hl">Menü für verknüpfte Spiele verwalten</span>`,
        imgpath: "Der Speicherort, an dem Benachrichtigungsbilder, die von dieser Option generiert wurden, gespeichert werden",
        linkedgames: `Umgehen Sie das <span class="hl">automatische Prozess-Tracking</span> für bestimmte Steam-Spiele<br><br><span class="ttdesc">Diese Option sollte nur in sehr spezifischen Szenarien verwendet werden. Benutzer sollten diese Option unter normalen Umständen nicht benötigen!</span>`,
        exclusionlist: `Verhindern Sie, dass Errungenschaften in bestimmten Steam-Spielen von der App verfolgt werden<br><br><span class="ttdesc">Diese Option sollte nur in sehr spezifischen Szenarien verwendet werden. Benutzer sollten diese Option unter normalen Umständen nicht benötigen!</span>`,
        ovx: "Verschieben Sie die Benachrichtigung, die im Screenshot angezeigt wird, horizontal",
        ovy: "Verschieben Sie die Benachrichtigung, die im Screenshot angezeigt wird, vertikal",
        importtheme: `Importieren Sie Anpassungen über eine vom Benutzer erstellte <span class="hl">Themendatei</span>`,
        exporttheme: `Exportieren Sie das aktuell ausgewählte <span class="hl">Thema</span> zum Teilen<br><br><span class="ttdesc">Bevor Sie exportieren, stellen Sie bitte sicher, dass das gewünschte <span class="hl">Thema</span> ausgewählt ist (über das Menü <span class="hl">Thema auswählen</span>). Stellen Sie auch sicher, dass Anpassungen in das ausgewählte <span class="hl">Thema</span> gespeichert wurden (über das Menü <span class="hl">Thema speichern</span>)<br><br><u>Anpassungen, die noch nicht im aktuellen <span class="hl">Thema</span> gespeichert wurden, werden nicht exportiert!</u></span>`,
        webhooks: "Verwenden Sie eine Webhook-URL, um in einem Discord-Server eine Nachricht zu posten, wenn ein Erfolg freigeschaltet wird",
        webhookurl: `Stellen Sie die <span class="hl">Webhook-URL</span> für den gewünschten Discord-Server ein<br><br><span class="ttdesc">Eine <span class="hl">Webhook-URL</span> wird verwendet, um im Namen eines Benutzers oder einer Anwendung auf einem Discord-Server/Kanal zu posten. Um einen neuen Webhook für einen Discord-Server einzurichten, muss der Benutzer eine Rolle im gewünschten Server haben, die das Erstellen von Webhooks erlaubt<br><br><u>Eine Webhook-URL ist erforderlich, wenn Sie diese Option verwenden</u><br><br>Weitere Informationen finden Sie in der offiziellen Discord-Dokumentation</span>`,
        unlockmsg: "Stellen Sie die Position der Freischalt-Nachricht/des benutzerdefinierten Textes im $type ein",
        title: "Stellen Sie die Position des Erfolgstitels im $type ein",
        desc: "Stellen Sie die Position der Erfolgsbeschreibung im $type ein",
        notification: "Benachrichtigung",
        screenshot: "Screenshot",
        percentpos: "Stellen Sie die Position des Seltenheitsprozentsatzes im $type ein",
        sspercentpos: "Stellen Sie die Position des Seltenheitsprozentsatzes im $type ein",
        hiddeniconpos: "Stellen Sie die Position des versteckten/geheimen Erfolgssymbols im $type ein",
        sshiddeniconpos: "Stellen Sie die Position des versteckten/geheimen Erfolgssymbols im $type ein",
        decorationpos: "Stellen Sie die Position des Dekorationselements im $type ein",
        ssdecorationpos: "Stellen Sie die Position des Dekorationselements im $type ein"
    },
    update: {
        updateavailable: "Update verfügbar",
        sub: [
            `<span id="newversion"></span>`,
            "Ein neues Update für Steam Achievement Notifier ist verfügbar!",
            `Vollständige Versionshinweise finden Sie auf <span id="discordreleasenotes"></span> und <span id="githubreleasenotes"></span>`
        ],
        update: "Update"
    },
    linkgame: {
        content: {
            exepath: "Ausführungspfad",
            managesub: [
                `Verknüpfen Sie manuell die <span class="hl">Ausführungsdatei</span> eines Spiels mit einer bestimmten <span class="hl">AppID</span> oder <span class="hl">heben Sie eine bestehende Verknüpfung auf</span>`,
                `Steam Achievement Notifier wird nicht mehr den <span class="hl">automatischen Prozess-Tracking</span> für irgendwelche <span class="hl">verknüpften Spiele</span> verwenden - stattdessen wird die angegebene <span class="hl">Ausführungsdatei</span> verfolgt, sobald die zugehörige <span class="hl">AppID</span> erkannt wird`,
                `<span class="hl" id="appidhelp"><u>Wie finde ich eine AppID für ein Steam-Spiel?</u></span>`
            ],
            linknew: "Neues verknüpftes Spiel",
            linknewsub: [
                `Erstellen Sie eine neue Verknüpfung zwischen einer <span class="hl">Spiel-Ausführungsdatei</span> und der zugehörigen <span class="hl">AppID</span>`,
                `Nachdem sie erstellt wurden, können Verknüpfungen über den vorherigen <span class="hl">Dialog „Verknüpfte Spiele verwalten“</span> <span class="hl">aufgehoben</span> werden`
            ],
            link: "Verknüpfen",
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Fügen Sie die <span class="hl">AppID</span> eines beliebigen Steam-Spiels der <span class="hl">Ausschlussliste</span> hinzu`,
                `Steam Achievement Notifier wird nicht versuchen, Erfolgsdaten für jedes Spiel zu verfolgen, dessen <span class="hl">AppID</span> der <span class="hl">Ausschlussliste</span> hinzugefügt wurde`,
                `<span class="hl" id="appidhelp"><u>Wie finde ich die AppID eines Steam-Spiels?</u></span>`
            ],
            exclusionnew: "Neuer Ausschluss",
            exclusionnewsub: [
                `Geben Sie die <span class="hl">AppID</span> ein, um sie der <span class="hl">Ausschlussliste</span> hinzuzufügen`
            ]
        }
    }
}

export const missingdepssub = (opt: string, dep: string) => [
    `Es scheint, dass Sie versuchen, die Option <span class="hl">${opt}</span> zu aktivieren. Auf Linux-Systemen können jedoch keine Screenshots gemacht werden, ohne zuerst das Paket <code class="dialogcode">${dep}</code> zu installieren`,
    `Bitte führen Sie <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> aus, um diese Abhängigkeit zu installieren. Dadurch können Screenshots auf diesem Gerät gemacht werden`
]