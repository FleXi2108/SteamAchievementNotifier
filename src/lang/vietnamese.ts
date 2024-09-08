export const translations = {
    global: {
        main: "Chính",
        rare: "Hiếm",
        plat: "100%",
        topleft: "Trên Trái",
        topcenter: "Trên Giữa",
        topright: "Trên Phải",
        bottomleft: "Dưới Trái",
        bottomcenter: "Dưới Giữa",
        bottomright: "Dưới Phải",
        ok: "OK",
        preview: "Xem Trước",
        save: "Lưu",
        back: "Quay Lại",
        settings: "Cài Đặt",
        appversion: "Phiên Bản Ứng Dụng",
        image: "Hình Ảnh",
        audio: "Âm Thanh",
        folder: "Thư Mục",
        font: "Font Chữ",
        select: "Chọn",
        gametitle: "Tên Trò Chơi",
        congrats: "Chúc Mừng!",
        achievementunlocked: "Thành Tích Mở Khóa",
        gamecomplete: "Hoàn Thành 100%",
        achievementdesc: "Nhấp vào nút để hiển thị thông báo thử nghiệm",
        gamecompletedesc: "Bạn đã mở khóa tất cả các thành tích!",
        defaultcustomfont: "Mặc Định (Không Chọn Font)",
        defaultsoundfile: "Mặc Định (Không Chọn File)",
        defaultsounddir: "Mặc Định (Không Chọn Thư Mục)",
        nowtracking: "Hiện Đang Theo Dõi Thành Tích Cho:",
        nopreview: "Xem trước không khả dụng cho hệ điều hành cục bộ",
        options: "Tùy chọn",
        resetwindow: "Đặt lại Cửa sổ",
        show: "Hiển thị",
        exit: "Thoát",
        releasegame: "Giải phóng Trò chơi",
        releasegamesub: [
            `Khởi động lại quá trình Worker nền và giải phóng trò chơi hiện tại khỏi việc được theo dõi`,
            `Hãy thử tùy chọn này nếu bạn vừa mới đóng một trò chơi nhưng Steam vẫn hiển thị nó đang chạy, hoặc nếu Steam Achievement Notifier vẫn hiển thị đang theo dõi một trò chơi đã được đóng`
        ],
        noupdateavailable: "Không có bản cập nhật nào khả dụng",
        latestversion: "Phiên bản mới nhất đã được cài đặt",
        missingdeps: "Thiếu phụ thuộc",
        restartapp: "Khởi động lại ứng dụng",
        restartappsub: [
            `Nếu mọi thứ không hoạt động đúng cách, hãy sử dụng tùy chọn này để đóng và mở lại ứng dụng`,
            `Nếu vấn đề vẫn tiếp tục sau khi khởi động lại ứng dụng, xin vui lòng xem xét báo cáo nó bằng cách sử dụng các liên kết tích hợp trên màn hình chính`
        ],
        suspend: "Tạm dừng",
        resume: "Tiếp tục",
        new: "Mới...",
        nodata: "Không có dữ liệu",
        findappid: "Tìm AppID",
        findappidsub: [
            `Mỗi trò chơi Steam đều có một số duy nhất liên kết với nó - gọi là <span class="hl">AppID</span>. Bạn có thể tìm thấy AppID liên kết với bất kỳ trò chơi Steam nào bằng cách kiểm tra một trong các cách sau:`,
            `Trong <span class="hl">khách hàng Steam</span>, nhấp chuột phải vào một trò chơi trong <span class="hl">Thư viện</span> của bạn và chọn <i>Thuộc tính</i> > <i>Cập nhật</i> - AppID sẽ được liệt kê ở đây`,
            `URL của trang <span class="hl">Cửa hàng</span> của trò chơi - nó sẽ là số được liệt kê sau <span class="hl">app/</span>: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `Các trang web như <span class="hl">SteamDB</span> - phần <span class="hl">Thông tin Ứng dụng</span> sẽ liệt kê AppID cho mỗi trò chơi`
        ],
        elemselector: "Các yếu tố thông báo",
        unlockmsg: "Thông báo mở khóa",
        title: "Tiêu đề thành tựu",
        desc: "Mô tả thành tựu",
        hiddeniconpos: "Biểu tượng ẩn",
        sshiddeniconpos: "Biểu tượng ẩn",
        decorationpos: "Trang trí",
        ssdecorationpos: "Trang trí",
        percentpos: "Tỷ lệ hiếm có",
        sspercentpos: "Tỷ lệ hiếm có",
        noexe: "Không tìm thấy tệp EXE của trò chơi!",
        noexesub: `Chọn Tùy chọn > Thoát trò chơi từ khay hệ thống để thoát`,
        webhookunlockmsg: "$user đã mở khóa một thành tựu",
        webhookingame: "trong $gamename"
    },
    app: {
        content: {
            game: "Không Phát hiện Trò chơi",
            customise: "Tùy chỉnh",
            test: "Hiển thị Thông báo Kiểm tra"
        }
    },
    settings: {
        language: {
            title: "Ngôn ngữ"
        },
        os: {
            title: "Hệ điều hành",
            content: {
                desktop: "Tạo Phím tắt Desktop",
                startwin: "Bắt đầu khi đăng nhập",
                startmin: "Bắt đầu Thu nhỏ",
                nohwa: "Vô hiệu hóa Tăng tốc Phần cứng",
                litemode: "Chế độ Nhẹ"
            }
        },
        notifications: {
            title: "Thông báo",
            content: {
                rarity: "Tỷ lệ Hiếm",
                rareonly: "Chỉ Hiếm",
                all: "Tất cả",
                off: "Tắt",
                showpercent: "Hiển thị Phần trăm",
                soundonly: "Chỉ Âm thanh",
                extwin: "Thông báo Luồng",
                audiosrc: "Nguồn Âm thanh",
                notify: "Thông báo",
                app: "Ứng dụng",
                nowtracking: "Hiển thị Thông báo Theo dõi",
                nowtrackingscale: "Tỷ lệ Theo dõi",
                nowtrackingpos: "Vị trí Theo dõi",
                shortcuts: "Phím tắt Thông báo",
                noiconcache: "Tắt bộ nhớ cache biểu tượng",
                webhooks: "Đăng lên máy chủ Discord",
                webhookurl: `URL Webhook`,
                webhookcaution: `Bằng cách kích hoạt tùy chọn này và cung cấp liên kết Webhook Discord hợp lệ, bạn đồng ý rằng bạn hiểu rằng <u>tất cả thông tin thành tựu và trò chơi của người dùng Steam hiện tại</u> sẽ được đăng lên máy chủ Discord đã chỉ định thông qua liên kết Webhook được cung cấp.<br><br>Nếu bạn không muốn Steam Achievement Notifier đăng thông tin này thay cho bạn, hãy tắt tùy chọn này.`,
                webhooklaststatus: "Trạng thái cuối cùng"
            }
        },
        media: {
            title: "Đa phương tiện",
            content: {
                steamss: "Chụp Ảnh Màn hình Steam",
                screenshots: "Phương tiện Bổ sung",
                off: "Tắt",
                overlay: "Chụp Ảnh Màn hình với Chồng Lên Thông báo",
                monitors: "Nguồn Chụp Ảnh Màn hình",
                hdrmode: "Chế độ HDR",
                ovpos: "Vị trí Chồng Lên",
                ovmatch: "Phù hợp với Vị trí Tùy chỉnh",
                ovx: "Lệch Ngang",
                ovy: "Lệch Dọc",                
                ovpath: "Đường dẫn Chụp Ảnh Màn hình",
                ssdelay: "Độ Trễ Chụp Ảnh Màn hình",
                notifyimg: "Hình ảnh thông báo",
                imgpath: "Đường dẫn hình ảnh"
            }
        },
        games: {
            title: "Trò chơi",
            content: {
                linkedgames: "Trò chơi Liên kết",
                exclusionlist: "Danh sách Loại trừ"
            }
        },
        accessibility: {
            title: "Tiện ích Truy cập",
            content: {
                noanim: "Vô hiệu hóa Hiệu ứng Cửa sổ Ứng dụng",
                noupdatedialog: "Vô hiệu hóa hộp thoại Cập nhật",
                nvda: "Bật hỗ trợ NVDA",
                tooltips: "Hiển thị Chú giải Công cụ"
            }
        },
        advanced: {
            title: "Nâng cao",
            content: {
                pollrate: "Tần suất thăm dò",
                initdelay: "Độ trễ theo dõi",
                releasedelay: "Độ trễ phát hành",
                maxretries: "Số lần thử lại tối đa",
                debug: "Bảng Gỡ lỗi",
                userust: "Chế độ Xử lý Thay thế",
                notifydebug: "Hiển thị thông báo gỡ lỗi",
                usecustomfiles: "Sử dụng tập tin ứng dụng tùy chỉnh",
                showcustomfiles: "Hiển thị tập tin ứng dụng tùy chỉnh"
            }
        },        
        misc: {
            title: "Điều bổ sung",
            content: {
                checkforupdates: "Kiểm tra cập nhật",
                log: "Nhật ký ứng dụng",
                reset: "Đặt lại Ứng dụng"
            }
        }
    },    
    customiser: {
        preset: {
            title: "Cài đặt trước",
            content: {
                preset: "Cài đặt thông báo",
                iconanim: "Hoạt ảnh biểu tượng hiếm",
                alldetails: "Hiển thị tất cả chi tiết",
                usepercent: "Sử dụng Phần trăm",
                displaytime: "Thời gian hiển thị",
                scale: "Tỷ lệ",
                customtext: "Văn bản tùy chỉnh",
                usegametitle: "Sử dụng tiêu đề trò chơi",
                customfont: "Phông chữ tùy chỉnh"
            }
        },
        sound: {
            title: "Âm thanh",
            content: {
                soundmode: "Chế độ âm thanh",
                file: "Tệp",
                folder: "Ngẫu nhiên",
                soundfile: "Tệp âm thanh",
                sounddir: "Thư mục âm thanh",
                volume: "Âm lượng"
            }
        },
        style: {
            title: "Phong cách",
            content: {
                bgstyle: "Kiểu nền",
                solid: "Màu sắc đồng nhất",
                gradient: "Chuyển đổi màu sắc",
                img: "Hình ảnh",
                gameart: "Nghệ thuật game",
                gradientangle: "Góc chuyển đổi màu sắc",
                bgimg: "Hình ảnh nền",
                bgimgbrightness: "Độ sáng",
                brightness: "Độ sáng",
                blur: "Mờ",
                roundness: "Độ tròn",
                fontsize: "Cỡ chữ",
                opacity: "Độ mờ",
                bgonly: "Chỉ nền",
                glow: "Phát sáng",
                glowcolor: "Màu sắc",
                glowsize: "Kích thước",
                glowanim: "Hoạt hình",
                glowx: "Độ dịch chuyển Ngang",
                glowy: "Độ dịch chuyển Dọc",
                glowopacity: "Độ mờ",
                glowspeed: "Tốc độ",
                off: "Tắt",
                pulse: "Nhịp tim",
                rainbow: "Cầu vồng",
                mask: "Mặt nạ",
                maskimg: "Hình ảnh mặt nạ",
                outline: "Đường viền",
                outlinecolor: "Màu đường viền",
                outlinewidth: "Độ rộng đường viền",
                dashed: "Gạch chéo",
                dotted: "Chấm chấm"
            }
        },
        colors: {
            title: "Màu sắc",
            content: {
                primarycolor: "Màu chính",
                secondarycolor: "Màu phụ",
                tertiarycolor: "Màu phụ thuộc",
                fontcolor: "Màu chữ",
                fontoutline: "Viền chữ",
                fontoutlinecolor: "Màu viền chữ",
                fontshadow: "Bóng chữ",
                fontshadowcolor: "Màu bóng chữ"
            }
        },
        icons: {
            title: "Biểu tượng",
            content: {
                iconroundness: "Độ tròn của biểu tượng",
                plat: "Logo 100%",
                usegameicon: "Sử dụng biểu tượng trò chơi",
                logo: "Logo",
                decoration: "Trang trí",
                showdecoration: "Hiển thị trang trí",
                rarity: "Độ hiếm",
                showhiddenicon: "Hiển thị biểu tượng ẩn",
                hiddenicon: "Biểu tượng ẩn",
                replacelogo: "Thay Đổi Logo"
            }
        },
        position: {
            title: "Vị trí",
            content: {
                pos: "Vị trí trên màn hình",
                usecustompos: "Sử dụng vị trí tùy chỉnh",
                setcustompos: "Đặt",
                resetcustompos: "Đặt lại"
            }
        },
        theme: {
            title: "Chủ đề",
            content: {
                updatetheme: "Cập Nhật Chủ Đề",
                savetheme: "Lưu chủ đề",
                sub: [
                    `Các <span class="hl">Chủ đề người dùng đã lưu</span> có thể được chọn từ menu <span class="hl">Chọn chủ đề</span> trên màn hình chính.`,
                    `Đảm bảo rằng <span class="hl">Tên chủ đề</span> là <u>duy nhất</u> - một tên trùng khớp với một chủ đề hiện tại <u>sẽ ghi đè lên chủ đề trước đó</u>!`
                ],
                placeholder: "Tên chủ đề",
                theme: "Chủ đề",
                importtheme: "Nhập Tema",
                import: "Nhập",
                importsub: [
                    `Nhập một <span class="hl">tệp Tema</span> do người dùng tạo ra`,
                    `Các <span class="hl">Tema đã nhập</span> sẽ được tải tự động sau khi nhập thành công và có thể được chọn từ menu <span class="hl">Chọn Tema</span>`,
                ],
                importidle: `Chọn một <span class="hl">tệp Tema</span> để nhập`,
                importcopied: `Sao chép Tema thành công`,
                importrenamed: `Đổi tên Tema thành công`,
                importextracted: `Trích xuất Tema thành công`,
                importrewriting: `Đổi lại đường dẫn tệp Tema...`,
                importconverting: `Chuyển đổi Tema...`,
                importcreating: `Tạo Tema...`,
                importdone: `Nhập Tema thành công`,
                importfailed: `Lỗi khi nhập tệp Tema đã chọn!`,
                exporttheme: "Xuất Tema",
                export: "Xuất"                
            }
        }
    },
    logwin: {
        content: {
            tagline: "Dưới đây là những gì đã xảy ra kể từ khi ứng dụng được khởi động:",
            copylog: "Sao chép nội dung nhật ký"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>Bạn chắc chắn không?</span>
                    <span>Tất cả dữ liệu đã cấu hình trước đó, <u>bao gồm Các thiết lập Tùy chỉnh</u>, sẽ được đặt lại về giá trị mặc định.</span>
                    <span>🛑 Hành động này không thể hoàn tác!</span>
                </div>
            `,
            reset: "Đặt lại"
        }
    },
    error: {
        content: {
            subtitle: "Ứng dụng Steam Achievement Notifier gặp sự cố và cần đóng lại.",
            details: "Dưới đây là chi tiết lỗi:",
            sub: "Nhấn vào các nút dưới đây để báo cáo sự cố này thông qua nền tảng ưa thích của bạn.",
            report: "Báo cáo",
            log: "Nhật ký ứng dụng",
            exit: "Thoát"
        }
    },    
    tooltips: {
        game: "Trò chơi đang được theo dõi thành tựu",
        usertheme: "Chọn một Chủ đề đã lưu trước đó",
        customise: "Tùy chỉnh Thông báo thành tựu",
        test: "Hiển thị Thông báo Kiểm tra, bao gồm bất kỳ tùy chỉnh nào",
        kofi: "Ủng hộ trên Ko-Fi!",
        discord: "Tham gia trên Discord!",
        github: "Báo cáo sự cố",
        lang: "Chọn ngôn ngữ giao diện người dùng được sử dụng trong ứng dụng",
        desktop: "Chuyển đổi một phím tắt trên Màn hình để chạy ứng dụng",
        startwin: "Khởi động Steam Achievement Notifier tự động sau khi đăng nhập",
        startmin: "Sau khi khởi chạy, ẩn cửa sổ giao diện người dùng của ứng dụng cho đến khi mở từ Khay hệ thống",
        nohwa: `Tắt Tăng tốc phần cứng, điều này có thể cải thiện hiệu suất trên các hệ thống có tài nguyên hạn chế hoặc hệ thống không có GPU riêng<br><br><span class="ttdesc">Ứng dụng sẽ khởi động lại sau khi bật/tắt tùy chọn này</span>`,
        litemode: "Vô hiệu hóa tất cả các yếu tố giao diện người dùng tương tác, chỉ cung cấp chức năng ứng dụng giới hạn thông qua biểu tượng Khay hệ thống. Có thể cải thiện tài nguyên tiêu thụ của ứng dụng",
        rarity: "Phần trăm mà Thông báo thành tựu Hiếm sẽ được kích hoạt. Bất kỳ thành tựu nào có tỷ lệ mở khóa cao hơn giá trị này sẽ được hiển thị như một Thông báo chính",
        showpercent: "Hiển thị phần trăm mở khóa của thành tựu trong thông báo cho các loại đã chọn",
        soundonly: "Vô hiệu hóa thông báo, chỉ phát âm thanh được thiết lập qua Tùy chỉnh",
        extwin: "Tạo một cửa sổ nền ẩn hiện thị bất kỳ thông báo nào đang hiển thị trên màn hình. Cửa sổ này sau đó có thể được thêm làm nguồn Chụp Ảnh Màn hình cho phần mềm phát trực tiếp, chẳng hạn như OBS",
        audiosrc: "Chọn nguồn âm thanh (hoặc vô hiệu hóa) được tạo bởi ứng dụng",
        nowtracking: "Hiển thị một thông báo thông báo người dùng rằng thành tựu cho một trò chơi đang chạy đang được theo dõi",
        nowtrackingscale: `Đặt kích thước của Thông báo Theo dõi`,
        nowtrackingpos: `Đặt vị trí của thông báo theo dõi`,
        shortcuts: "Kích hoạt Thông báo Kiểm tra thông qua phím tắt bàn phím. Phím tắt có thể được tùy chỉnh cho mỗi loại thông báo",
        noiconcache: `Tắt việc lưu cache biểu tượng thành tự động khi khởi động trò chơi.<br><br><span class="ttdesc">Điều này có thể cải thiện đáng kể hiệu suất ứng dụng khi khởi động trò chơi và cũng có thể giải quyết các vấn đề theo dõi trong các trò chơi có số lượng thành tựu lớn. Tuy nhiên, trong các trường hợp hiếm hoi, việc tắt bộ nhớ cache biểu tượng có thể dẫn đến việc thiếu biểu tượng thành tựu trong thông báo</span>`,
        steamss: "Chụp ảnh Màn hình Steam khi mở khóa thành tựu",
        screenshots: "Chọn loại Phương tiện Bổ sung để tạo khi hiển thị thông báo",
        monitors: "Màn hình sẽ được chụp ảnh khi chụp ảnh màn hình",
        hdrmode: `Chụp ảnh màn hình bằng phương pháp tương thích với các màn hình sử dụng công nghệ High Dynamic Range (HDR)`,
        ovpos: "Vị trí của lớp chồng thông báo trong ảnh chụp màn hình",
        ovmatch: "Phù hợp với Vị trí Màn hình được thiết lập trong Tùy chỉnh cho loại thông báo này",
        ovpath: "Vị trí nơi ảnh chụp được tạo bởi tùy chọn này sẽ được lưu",
        ssdelay: "Thêm một độ trễ từ khi thông báo xuất hiện đến khi chụp ảnh màn hình",
        sspreview: "Hiển thị một bản xem trước về cách ảnh chụp màn hình sẽ xuất hiện khi được lưu",
        noanim: "Vô hiệu hóa tất cả các hiệu ứng cửa sổ và hiệu ứng chuyển tiếp trong ứng dụng",
        noupdatedialog: `Ngăn chặn hiển thị tự động và tập trung vào hộp thoại <span class="hl">Cập nhật có sẵn</span><br><br><span class="ttdesc">Hộp thoại vẫn có thể truy cập bằng cách nhấp vào nút cập nhật khi có sẵn</span>`,
        nvda: "Bật sao chép thông tin thành tựu vào clipboard khi mở khóa thành tựu, để đọc bằng phần mềm đọc màn hình, chẳng hạn như NVDA",
        tooltips: "Hiển thị gợi ý khi di chuột qua các yếu tố giao diện người dùng cụ thể",
        pollrate: `Đặt khoảng thời gian cập nhật cho dữ liệu thành tựu trong khi chơi game<br><br><span class="ttdesc">Hiệu suất có thể tăng/giảm tùy thuộc vào giá trị hoặc phần cứng của hệ thống. Các giá trị cao thường dẫn đến tải hệ thống thấp hơn, nhưng có thể gây trễ trong thông báo</span>`,
        initdelay: `Đặt thời gian chờ giữa khi phát hiện <span class="hl">AppID</span> hiện tại và khi bắt đầu theo dõi quy trình/thành tựu<br><br><span class="ttdesc">Tăng giá trị này có thể ngăn ngừa những tình huống khi Steam không thể khởi động trò chơi hiện tại (do việc khởi tạo ứng dụng trong Steamworks trước khi trò chơi được khởi động)</span><br><br><span class="ttdesc">Hoặc có thể sử dụng giá trị này để tránh phát hiện không chính xác các quy trình khởi động trước trò chơi</span>`,
        releasedelay: `Thiết lập thời gian chờ cho quá trình nền để khởi động lại sau khi trò chơi hiện tại đã được phát hành. Ảnh hưởng đến cả việc theo dõi quá trình tự động và các trò chơi được liên kết thủ công.<br><br><span class="ttdesc">Cung cấp một khoảng thời gian lâu hơn để hoàn toàn giải phóng Steamworks khỏi ứng dụng. Tăng giá trị này có thể ngăn ngừa hành vi bất thường, chẳng hạn như theo dõi một trò chơi trước đó đã đóng</span>`,
        maxretries: `Thiết lập số lần thử tối đa để liên kết một quá trình đang chạy với một AppID đã phát hiện. Ảnh hưởng đến cả việc theo dõi quá trình tự động và các trò chơi được liên kết thủ công.<br><br><span class="ttdesc">Các thử nghiệm liên kết được thực hiện mỗi giây một lần. Nếu một quá trình đang chạy không được liên kết với AppID hiện tại sau số lần thử này, một quá trình không hợp lệ sẽ được trả về. Trong trường hợp như vậy, trò chơi sẽ cần được phát hành thủ công thông qua Khay Hệ thống > Tùy chọn > Phát hành Trò chơi</span>`,
        debug: "Mở Bảng Gỡ lỗi, hiển thị thông tin theo dõi quy trình chi tiết",
        userust: "Sử dụng chức năng thay thế dựa trên Rust để kiểm tra xem các quy trình trò chơi đã được theo dõi có đang chạy trên hệ thống không. Khi không được đánh dấu, kiểm tra quy trình mặc định dựa trên NodeJS sẽ được sử dụng thay vào đó.",
        notifydebug: "Tạo một cửa sổ DevTools cho tất cả các thông báo. Hữu ích để gỡ lỗi/viết mã sửa lỗi vấn đề thông báo",
        usecustomfiles: "Cho phép thông báo tải tệp tùy chỉnh của người dùng. Cần thận trọng đối với người dùng thông thường",
        showcustomfiles: "Mở vị trí của các tệp tùy chỉnh",
        log: "Mở cửa sổ Nhật ký Ứng dụng, hiển thị thông tin về hoạt động quá trình, cảnh báo và lỗi",
        reset: "Xóa tất cả dữ liệu cấu hình và khởi động lại ứng dụng",
        playback: "Tạm dừng/tiếp tục hoạt ảnh của xem trước thông báo",
        replay: "Khởi động lại hoạt ảnh của xem trước thông báo",
        preset: "Chọn cài đặt thông báo để tùy chỉnh",
        iconanim: "Chuyển đổi viền và hoạt ảnh biểu tượng Hiếm",
        alldetails: "Hiển thị tất cả các yếu tố văn bản trong thông báo, bao gồm cả những yếu tố bị ẩn theo mặc định cho cài đặt này",
        usepercent: "Hiển thị phần trăm mở khóa của thành tựu, thay vì giá trị XP/S",
        displaytime: "Đặt số giây thông báo sẽ hiển thị",
        scale: "Tăng hoặc giảm kích thước của thông báo",
        customtext: "Đặt một thông báo tùy chỉnh để hiển thị trong thông báo",
        usegametitle: "Hiển thị tiêu đề của trò chơi hiện tại trong thông báo",
        customfont: "Tải một phông chữ tùy chỉnh để sử dụng trong thông báo",
        soundmode: "Chọn một tệp âm thanh duy nhất hoặc một tệp âm thanh được chọn ngẫu nhiên từ một thư mục chứa nhiều tệp âm thanh khi có thông báo xảy ra",
        soundfile: "Chọn một tệp âm thanh để phát khi có thông báo xảy ra",
        sounddir: "Chọn một thư mục từ đó một tệp âm thanh sẽ được chọn ngẫu nhiên khi có thông báo xảy ra",
        volume: "Đặt âm lượng phát lại của tệp âm thanh",
        preview: "Xem trước tệp âm thanh đã chọn hoặc một tệp âm thanh được chọn ngẫu nhiên từ thư mục",
        bgstyle: "Chọn kiểu cho nền thông báo",
        gradientangle: "Đặt góc của độ dốc",
        bgimg: "Tải một tệp hình ảnh để sử dụng làm nền thông báo",
        bgimgbrightness: "Thiết lập độ sáng của hình ảnh được sử dụng làm nền thông báo",
        brightness: "Đặt độ sáng của nghệ thuật trò chơi được sử dụng làm nền thông báo",
        blur: "Đặt mức độ mờ được áp dụng vào nền của thông báo",
        roundness: "Đặt độ cong của các cạnh thông báo",
        fontsize: "Đặt kích thước của phông chữ được sử dụng trong thông báo",
        opacity: "Đặt độ mờ tổng thể của thông báo",
        bgonly: "Chỉ đặt độ mờ cho nền thông báo, giữ các yếu tố khác ở độ mờ đầy đủ",
        glow: "Bật hiệu ứng phát sáng bao quanh thông báo",
        glowcolor: "Đặt màu sắc của hiệu ứng phát sáng",
        glowsize: "Đặt kích thước của hiệu ứng phát sáng",
        glowx: "Đặt vị trí dịch chuyển ngang của hiệu ứng sáng",
        glowy: "Đặt vị trí dịch chuyển dọc của hiệu ứng sáng",
        glowopacity: "Đặt độ mờ của hiệu ứng sáng",
        glowanim: "Chọn một hiệu ứng trước định để áp dụng vào hiệu ứng phát sáng",
        glowspeed: "Đặt tốc độ của hoạt hình được áp dụng vào hiệu ứng phát sáng",
        mask: "Bật mặt nạ cho các phần của thông báo với một hình ảnh tùy chỉnh",
        maskimg: `Tải lên một tập tin hình ảnh để sử dụng làm mặt nạ<br><br><span class="ttdesc">Trong CSS, <code class="ttcode">mask-mode: alpha</code> hoạt động ngược lại với những gì thường được mong đợi - các vùng trong suốt trong tập tin hình ảnh sẽ bị che khuất và các vùng đen/xám sẽ cho phép các yếu tố phía dưới trở nên hiển thị</span>`,
        outline: "Chọn loại đường viền để hiển thị xung quanh thông báo",
        outlinecolor: "Cài đặt màu đường viền xung quanh thông báo",
        outlinewidth: "Cài đặt độ rộng của đường viền xung quanh thông báo",
        primarycolor: "Đặt màu chính của thông báo",
        secondarycolor: "Đặt màu phụ của thông báo",
        tertiarycolor: "Đặt màu thứ cấp của thông báo",
        fontcolor: "Đặt màu của tất cả văn bản hiển thị trong thông báo",
        fontoutline: "Thêm đường viền cho tất cả văn bản hiển thị trong thông báo",
        fontoutlinecolor: "Đặt màu của đường viền văn bản",
        fontshadow: "Thêm bóng cho tất cả văn bản hiển thị trong thông báo",
        fontshadowcolor: "Đặt màu của bóng văn bản",
        iconroundness: "Đặt độ cong của biểu tượng thành tựu/trò chơi hiển thị trong thông báo",
        plat: "Tải một tệp hình ảnh để sử dụng làm biểu tượng 100%",
        usegameicon: "Thay thế biểu tượng thông báo mặc định bằng biểu tượng cho trò chơi hiện tại",
        showhiddenicon: "Hiển thị một hình ảnh chỉ ra rằng thành tựu đang bị ẩn trong thông báo",
        hiddenicon: "Tải lên một tệp hình ảnh để thay thế biểu tượng thành tựu ẩn",
        logo: "Tải một tệp hình ảnh để thay thế biểu tượng Logo",
        decoration: "Tải một tệp hình ảnh để thay thế biểu tượng Trang trí",
        showdecoration: "Chuyển đổi tính hiển thị của biểu tượng Trang trí",
        replacelogo: "Thay thế biểu tượng logo trong thông báo bằng trang trí đã chọn",
        pos: "Đặt vị trí trên màn hình của thông báo",
        usecustompos: "Bật tùy chỉnh vị trí cho thông báo",
        setcustompos: "Đặt vị trí tùy chỉnh cho thông báo",
        resetcustompos: "Đặt lại vị trí của thông báo về vị trí tùy chỉnh mặc định",
        updatetheme: "Cập nhật Chủ đề hiện tại với các tùy chọn tùy chỉnh đã chọn",
        savetheme: "Lưu tất cả các tùy chọn tùy chỉnh cấu hình như một Chủ đề mới",
        visibilitybtn: "Chuyển đổi tính hiển thị của phần tử trong xem trước tùy chỉnh và thông báo kiểm tra",
        delbtn: "Đặt lại phần tử về giá trị mặc định",
        link: `Mở <span class="hl">Menu Quản lý Trò chơi Liên kết</span>`,
        imgpath: "Vị trí nơi hình ảnh thông báo được tạo ra bởi tùy chọn này sẽ được lưu trữ",
        linkedgames: `Bỏ qua <span class="hl">theo dõi tự động các quy trình</span> cho các trò chơi Steam cụ thể<br><br><span class="ttdesc">Tùy chọn này chỉ nên được sử dụng trong các tình huống rất cụ thể. Người dùng không nên cần phải sử dụng tùy chọn này trong điều kiện bình thường!</span>`,
        exclusionlist: `Ngăn chặn ứng dụng theo dõi thành tích trong các trò chơi Steam cụ thể<br><br><span class="ttdesc">Tùy chọn này chỉ nên được sử dụng trong các tình huống rất cụ thể. Người dùng không nên cần phải sử dụng tùy chọn này trong điều kiện bình thường!</span>`,
        ovx: "Lệch thông báo hiển thị trên ảnh chụp màn hình theo chiều ngang",
        ovy: "Lệch thông báo hiển thị trên ảnh chụp màn hình theo chiều dọc",
        importtheme: `Nhập các tùy chỉnh thông qua một <span class="hl">tệp Tema</span> do người dùng tạo ra`,
        exporttheme: `Xuất <span class="hl">Tema</span> hiện tại đang chọn để chia sẻ<br><br><span class="ttdesc">Trước khi thử xuất, hãy đảm bảo rằng <span class="hl">Tema</span> mong muốn đã được chọn (qua menu <span class="hl">Chọn Tema</span>). Hãy đảm bảo rằng các tùy chỉnh đã được lưu vào <span class="hl">Tema</span> đã chọn (qua menu <span class="hl">Lưu Tema</span>)<br><br><u>Bất kỳ tùy chỉnh nào chưa được lưu vào <span class="hl">Tema</span> hiện tại sẽ không được xuất!</u></span>`,
        webhooks: "Sử dụng URL Webhook để đăng lên máy chủ Discord mỗi khi một thành tựu được mở khóa",
        webhookurl: `Cài đặt <span class="hl">URL Webhook</span> cho máy chủ Discord mong muốn<br><br><span class="ttdesc">URL Webhook được sử dụng để đăng lên máy chủ/kanal Discord thay mặt cho người dùng hoặc ứng dụng. Để thiết lập một Webhook mới cho máy chủ Discord, người dùng phải có một vai trò trên máy chủ mong muốn cho phép tạo Webhooks<br><br><u>URL Webhook là cần thiết khi sử dụng tùy chọn này</u><br><br>Xem tài liệu chính thức của Discord để biết thêm thông tin</span>`,
        unlockmsg: "Cài đặt vị trí của thông báo mở khóa/ văn bản tùy chỉnh trong $type",
        title: "Cài đặt vị trí của tiêu đề thành tựu trong $type",
        desc: "Cài đặt vị trí của mô tả thành tựu trong $type",
        notification: "thông báo",
        screenshot: "ảnh chụp màn hình",
        percentpos: "Cài đặt vị trí của tỷ lệ hiếm có trong $type",
        sspercentpos: "Cài đặt vị trí của tỷ lệ hiếm có trong $type",
        hiddeniconpos: "Cài đặt vị trí của biểu tượng thành tựu ẩn/bí mật trong $type",
        sshiddeniconpos: "Cài đặt vị trí của biểu tượng thành tựu ẩn/bí mật trong $type",
        decorationpos: "Cài đặt vị trí của yếu tố trang trí trong $type",
        ssdecorationpos: "Cài đặt vị trí của yếu tố trang trí trong $type"
    },
    update: {
        updateavailable: "Có bản cập nhật mới",
        sub: [
            `<span id="newversion"></span>`,
            "Có bản cập nhật mới cho Steam Achievement Notifier!",
            `Ghi chú phát hành đầy đủ có sẵn trên <span id="discordreleasenotes"></span> và <span id="githubreleasenotes"></span>`
        ],
        update: "Cập nhật"
    },
    linkgame: {
        content: {
            exepath: "Đường dẫn thực thi",
            managesub: [
                `Liên kết thủ công <span class="hl">tệp thực thi</span> của một trò chơi với một <span class="hl">AppID</span> cụ thể, hoặc <span class="hl">hủy liên kết</span> một liên kết hiện có`,
                `Steam Achievement Notifier sẽ không còn sử dụng <span class="hl">theo dõi quy trình tự động</span> cho bất kỳ <span class="hl">trò chơi liên kết</span> nào nữa - thay vào đó, tệp thực thi đã chỉ định sẽ được theo dõi mỗi khi <span class="hl">AppID</span> tương ứng được phát hiện`,
                `<span class="hl" id="appidhelp"><u>Làm thế nào để tìm AppID của một trò chơi Steam?</u></span>`
            ],
            linknew: "Trò chơi Liên kết Mới",
            linknewsub: [
                `Tạo liên kết mới giữa <span class="hl">tệp thực thi của trò chơi</span> và <span class="hl">AppID</span> tương ứng`,
                `Sau khi tạo, liên kết có thể được <span class="hl">hủy liên kết</span> thông qua hộp thoại <span class="hl">Quản lý Trò chơi Liên kết</span> trước đó`
            ],
            link: "Liên kết",
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Thêm <span class="hl">AppID</span> của bất kỳ trò chơi Steam nào vào <span class="hl">Danh sách Loại trừ</span>`,
                `Steam Achievement Notifier sẽ không cố gắng theo dõi dữ liệu thành tích cho bất kỳ trò chơi nào mà có <span class="hl">AppID</span> đã được thêm vào <span class="hl">Danh sách Loại trừ</span>`,
                `<span class="hl" id="appidhelp"><u>Làm thế nào để tìm AppID của một trò chơi Steam?</u></span>`
            ],
            exclusionnew: "Loại trừ Mới",
            exclusionnewsub: [
                `Nhập <span class="hl">AppID</span> để thêm vào <span class="hl">Danh sách Loại trừ</span>`
            ]
        }
    }
}

export const missingdepssub = (opt: string, dep: string) => [
    `Dường như bạn đang cố gắng bật tùy chọn <span class="hl">${opt}</span>. Tuy nhiên, trên các hệ thống Linux, không thể kích hoạt chụp màn hình mà không cài đặt trước gói <code class="dialogcode">${dep}</code>`,
    `Vui lòng chạy lệnh <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> để cài đặt phụ thuộc này. Điều này sẽ đảm bảo bạn có thể chụp màn hình trên thiết bị này`
]