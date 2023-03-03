

const recruitronUI = `<html class="artdeco osx">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>CARE Platform</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <meta name="care-web/config/environment"
        content="%7B%22modulePrefix%22%3A%22care-web%22%2C%22environment%22%3A%22production%22%2C%22rootURL%22%3A%22%2Fcare%2F%22%2C%22locationType%22%3A%22auto%22%2C%22EmberENV%22%3A%7B%22FEATURES%22%3A%7B%7D%2C%22EXTEND_PROTOTYPES%22%3A%7B%22Date%22%3Afalse%7D%2C%22_APPLICATION_TEMPLATE_WRAPPER%22%3Afalse%2C%22_DEFAULT_ASYNC_OBSERVERS%22%3Atrue%2C%22_JQUERY_INTEGRATION%22%3Afalse%2C%22_TEMPLATE_ONLY_GLIMMER_COMPONENTS%22%3Atrue%7D%2C%22APP%22%3A%7B%22name%22%3A%22care-web%22%2C%22version%22%3A%22care-web_0.2.358%2Bd94ec289%22%7D%2C%22eyeglass%22%3A%7B%22cssDir%22%3A%22assets%22%2C%22relativeAssets%22%3Atrue%7D%2C%22tracking%22%3A%7B%22appId%22%3A%22com.linkedin.care-web.d_web%22%2C%22pageKeyPrefix%22%3A%22d_%22%7D%2C%22exportApplicationGlobal%22%3Afalse%7D">
    <!-- EMBER_CLI_FASTBOOT_TITLE --><!-- EMBER_CLI_FASTBOOT_HEAD -->
    <meta name="__init"
        content="{&quot;lixV3Mode&quot;:false,&quot;lix&quot;:{&quot;helpcenter.chat.garfield.chat-ui-updates&quot;:{&quot;trackingInfo&quot;:null,&quot;testKey&quot;:&quot;helpcenter.chat.garfield.chat-ui-updates&quot;,&quot;treatment&quot;:&quot;control&quot;,&quot;primaryEvaluationUrn&quot;:null}}}">
    <meta name="isGuest" content="false">
    <meta name="renderingMode" data-mode="VANILLA">
    <!--%SSR_HEAD*[]%-->
    <meta name="isQueryTunnelRequestSupported" content="true">

    <meta name="bprPageInstance" content="urn:li:page:bpr;8a01886d-a2d6-4fd1-aa03-96a2e261d4eb">
    <meta name="applicationInstance"
        content="{&quot;applicationUrn&quot;: &quot;urn:li:application:(care-web,care-web)&quot;, &quot;version&quot;: &quot;0.2.358&quot;, &quot;trackingId&quot;: [21, 120, 51, 122, -69, 24, 76, 109, -67, 61, -83, -12, 23, 58, -72, -12]}">
    <meta name="clientPageInstanceId" content="b17a6c8b-ae28-4de5-949a-38caa51f0238">
    <meta name="service" content="care-web">
    <meta name="serviceInstance" content="i001">
    <meta name="serviceVersion" content="0.2.358">
    <meta name="treeID" content="AAX1ob2NN6S94MlZZ1CX4g==">
    <link rel="alternate icon" href="https://static.licdn.com/aero-v1/sc/h/3m4lyvbs6efg8pyhv7kupo6dh" id="favicon-ico"
        sizes="any">
    <link rel="apple-touch-icon" href="https://static.licdn.com/aero-v1/sc/h/bgsy6v435pgzegckur5tz0u2m">
    <link rel="apple-touch-icon-precomposed" href="https://static.licdn.com/aero-v1/sc/h/dhra8axxv5afjd3u90gduwpcj">
    <link rel="apple-touch-icon-precomposed" href="https://static.licdn.com/aero-v1/sc/h/bgsy6v435pgzegckur5tz0u2m"
        sizes="57x57">
    <link rel="apple-touch-icon-precomposed" href="https://static.licdn.com/aero-v1/sc/h/dhra8axxv5afjd3u90gduwpcj"
        sizes="144x144">
    <meta name="spark/hash-includes"
        content="{&quot;assets/images/ghost-avatar.png&quot;:&quot;https://static.licdn.com/aero-v1/sc/h/euf48or6d74p938p90d6pjwkj&quot;,&quot;assets/images/profile.svg&quot;:&quot;https://static.licdn.com/aero-v1/sc/h/62o8j3shqn0p4m1fui9vp3dbk&quot;,&quot;assets/images/vca-avatar.svg&quot;:&quot;https://static.licdn.com/aero-v1/sc/h/5juor428im7mv0i2pkad6t6f2&quot;,&quot;assets/sounds/chat-message-audio-notification.bin&quot;:&quot;https://static.licdn.com/aero-v1/sc/h/5lust5k7rsn27480k6hlmmroj&quot;}">
    <meta name="i18nDefaultLocale" content="en_US">
    <meta name="i18nLocale" content="en_US">
    <meta name="requestIpCountryCode" content="us">
    <meta name="liamOrLisa" content="none">
    <meta name="asset-url" id="artdeco/static/images/icons.svg"
        content="https://static.licdn.com/aero-v1/sc/h/6sz1e821vgereyxaakx87tt4z">

    <link rel="stylesheet" href="https://static.licdn.com/aero-v1/sc/h/8kgvejy8v5u2qx9pnlzixn97m">
    <link rel="stylesheet" href="https://static.licdn.com/aero-v1/sc/h/e90qdj6f5tzslgt8ibqkq6hh5">
    <!-- pulling support box style from style hosted on https://www.linkedin.com/talent/home  -->
    <style type="text/css">
      .care-chat-widget--garfield .care-chat-widget__header__profile-image {
        width: 60px;
        height: 60px;
      }
      .care-chat-widget--garfield .care-chat-widget__header__profile {
        height: 60px;
      }
      .status-indicator {
        height: 18px;
        width: 18px;
        left: calc(100% - 18px);
        bottom: 18px;
      }
      .care-chat-widget__header__title {
        font-size: 18px;
      }
    </style>
</head>

<body data-t-link-to-event-attached="true" class="ember-application boot-complete" data-new-gr-c-s-loaded="14.1098.0">
    <!-- EMBER_CLI_FASTBOOT_BODY --> <!--%SSR_BODY*[]%-->




    <script src="https://static.licdn.com/aero-v1/sc/h/djaa8up57sumayi1frkex1d82" data-fastboot-src="assets/vendor.js"
        crossorigin=""></script>
    <script src="https://static.licdn.com/aero-v1/sc/h/aw2fno7fg7466rkglfxkfk4i8"
        data-fastboot-src="/care/assets/chunk.143.bcf6fe33c77bea586e9d.js" crossorigin=""></script>
    <script data-embroider-ignore="" src="https://static.licdn.com/aero-v1/sc/h/j676ogfgukgkaqeca033sw1w"
        data-fastboot-src="assets/i18n/support_en_US.js" crossorigin=""></script>
    <script src="https://static.licdn.com/aero-v1/sc/h/ehsa2qim9ii784mp2ecoay4o1" data-fastboot-src="assets/care-web.js"
        crossorigin=""></script>


    <div style="width:400px;height:600px;">
        <!---->
        <div class="care-chat-widget__container care-chat-widget__container--embedded care-chat-widget--garfield"
            data-test-id="care-chat-widget-container" role="dialog" aria-modal="false" aria-label="Help Assistant Chat"
            tabindex="-1">
            <header class="care-chat-widget__header" aria-label="Help chat">
                <section class="care-chat-widget__header__agent-info-and-status"
                    data-test-id="chat-header-agent-status">
                    <div class="care-chat-widget__header__profile" data-test-id="profile-image">

                        <img class="care-chat-widget__header__profile-image"
                            src="https://iili.io/HVIOTjS.png" alt=""
                            data-test-id="profile-image"
                            data-test-path="https://static.licdn.com/aero-v1/sc/h/5juor428im7mv0i2pkad6t6f2">

                        <span class="status-indicator status-indicator--active" aria-hidden="true"
                            data-test-id="garfield-status-indicator"></span>
                    </div>
                    <div class="care-chat-widget__header__agent-info-and-status__text-container">
                        <h2 class="care-chat-widget__header__title" data-test-id="agent-info">
                            Recruitron - Your AI Assistant
                        </h2>
                        <div class="care-chat-widget__header__support-status" role="region" aria-live="polite"
                            aria-label="Agent status" data-test-id="agent-status">
                            <span class="visually-hidden">
                                Agent
                            </span>
                            <span class="care-chat-widget__header__support-status-text">
                                Active
                            </span>
                        </div>
                    </div>
                </section>
                <section class="care-chat-widget__header__container-actions">
                    <button aria-label="Dismiss chat" id="ember3"
                        class="artdeco-button artdeco-button--circle artdeco-button--inverse artdeco-button--1 artdeco-button--tertiary ember-view artdeco-button--circle artdeco-button--inverse artdeco-button--1 artdeco-button--tertiary"
                        data-test-id="dismiss-chat-widget-button"> <li-icon aria-hidden="true" type="cancel-icon"
                            class="artdeco-button__icon" size="small"><svg viewBox="0 0 24 24" width="24px"
                                height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon"
                                focusable="false">
                                <path
                                    d="M13,4.32L9.31,8,13,11.69,11.69,13,8,9.31,4.31,13,3,11.69,6.69,8,3,4.31,4.31,3,8,6.69,11.68,3Z"
                                    class="small-icon" style="fill-opacity: 1"></path>
                            </svg></li-icon>

                        <span class="artdeco-button__text">

                        </span></button>
                </section>
            </header>


            <section class="care-chat-widget__message-list-container" aria-live="assertive" aria-relevant="additions"
                aria-label="Chat messages list" role="log" data-test-id="message-list" tabindex="0">
                <ul class="care-chat-widget__message-list">
                    <li class="care-chat-widget__message care-chat-widget__message--response"
                        data-test-id="message-list-item">
                        <!---->
                    </li>
                    
                </ul>
            </section>
            <!---->
            <div class="care-chat-widget__delayed-intro-message" data-test-id="delayed-intro-message">
                <!---->
            </div>
            <!---->
            <div class="care-chat-widget__a11y-announcer visually-hidden" data-test-id="a11y-announcer" role="region"
                aria-live="assertive" aria-label="Chat status messages">
                <!---->
            </div>
            <footer class="care-chat-widget-footer" data-test-id="care-chat-widget-footer" aria-label="Help chat">
                <form name="user-input-chat-message">
                    <!---->
                    <section class="care-chat-widget__message-input" data-test-id="care-chat-garfield-message-input">
                        <div class="care-chat-widget__message-input-container">
                            <textarea class="care-chat-widget__message-input-textarea" id="chat-message-textarea-input"
                                data-test-id="textarea-input" placeholder=" "></textarea>
                            <label for="chat-message-textarea-input" class="care-chat-widget__message-input-label">
                                Write a message
                            </label>
                        </div>
                        <div class="care-chat-widget__message-input-message-actions-OVERRIDDEN">
                            <button aria-label="Send"
                                class="artdeco-button--circle artdeco-button--inverse artdeco-button--1 artdeco-button--tertiary care-chat-widget__message-input-action-button care-chat-widget__message-input-send"
                                data-test-id="send-button">
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                    class="artdeco-icon" aria-hidden="true" focusable="false">
                                    <path d="M3 3L6.5 10.5L16 12L6.5 13.5L3 21L22 12L3 3Z"></path>
                                </svg>
                            </button>
                        </div>
                    </section>
                </form>
            </footer>

        </div>


    </div>

    <!---->
</body>

</html>`;

function createJira(desc, sum) {
  // TODO: fix callback reference error and remove this line
  window.open('https://jira01.corp.linkedin.com:8443/browse/HPLT-55856', '_blank');

  let description = desc || 'test description';
  let summary = sum || 'test summary';
  $.ajax({
    type: "POST",
    crossDomain: true,
    dataType: 'jsonp',
    data: { "description": description, "summary": summary },
    url: "http://127.0.0.1:5000/create",
    CORS: true,
  }).done(onJiraSuccess);
}

function searchJira() {
  $.ajax({
    type: "GET",
    crossDomain: true,
    dataType: 'jsonp',
    url: "http://127.0.0.1:5000/search",
    CORS: true,
    success: callbackFunc
  });
}

function onJiraSuccess(response) {
  // not firing due to create?callback=jQuery1910991603221270617_1677657199085&description=test+description&summary=test+summary&_=1677657199086:1 Uncaught ReferenceError: HPLT is not defined
  console.log(response);
  url = 'https://jira01.corp.linkedin.com:8443/browse/' + ('HPLT-55856' || response);
  window.open(url, '_blank');
}

if (window == window.top) {
  console.log('Before doc is ready...');

  $(document).ready(function () {
    console.log('Current URL is ' + window.location.href);
    let chatBox = document.createElement('div');
    chatBox.style = "position:fixed;bottom:20px;right:20px;width:400px;height:600px;z-index:255;";
    chatBox.id = "chat-box";
    document.getElementById("application-wrapper").appendChild(chatBox);
    const frag = document.createRange().createContextualFragment(recruitronUI);
    chatBox.appendChild(frag);


    // TODO: move this to chatbox.js onced deployed to linkedin.com/talent
    //(function () {
    var fakeMsg, fakeNum, isTyping, messages, uctTimer;

    messages = $(".care-chat-widget__message-list");

    sentButton = $(".care-chat-widget__message-input-send");

    fakeNum = 0;

    isTyping = true;

    uctTimer = null;

    window.userTypingClear = function () {
      return uctTimer = setTimeout(function () {
        $(".care-chat-widget__message.personal.typing").remove();
        return isTyping = true;
      }, 3500);
    };

    window.setDate = function () {
      var d, timestamp;
      timestamp = $("<div>").addClass("timestamp");
      d = new Date();
      timestamp.html(
        `<div class="care-chat-widget__message-footer care-chat-widget__message-footer--user">
                                <p class="care-chat-widget__message-timestamp">`
        + d.getHours() + ":" + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes()
        + `</p>
          </div>`
      );
      return timestamp.appendTo($('.care-chat-widget__message:last'));
    };

    window.updateScrollbar = function () {
      //let $chatContainer = $(".care-chat-widget__message-list-container");
      // $(".care-chat-widget__message-list-container").scroll({ top: $(".care-chat-widget__message-list-container").scrollHeight, behavior: "smooth"});
      return messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
        scrollInertia: 0,
        timeout: 0
      });
    };

    // 1st case
    fakeMsg = ["Hi there, I\'m Recruitron and you?",
     "You can bulk import candidates by navigating to your Project > Project Settings > Import Candidates. The file is limited to 200 candidates and must be in CSV format. Most spreadsheets or database applications will export to this format.",
     "Ensure the spreadsheet contains the following columns in the following order: first name, last name, email, phone number",
     "It was a pleasure chat with you :)"];

    // 2nd case
    fakeMsg = ["Hi there, I\'m Recruitron, your AI assistant. Can I help you with anything?",
      "This sounds like a bug or feature request. Let me see if there are any pending tickets relevant to this issue...Looks like there are no relevant tickets right now.",
      "Current open issues are: CSE-4231: Seat Transfer Failure, CSE-4232: Candidate not moved automatically through pipeline",
      "I can create a support ticket for you and our team will look into this. Do you want to proceed?",
      "Great! Creating ticket...HPLT-55856"];


    const actionPrompts = {
      "Great! Creating ticket...": createJira
    }

    setFakeMessage = function () {
      var typing;
      typing = $("<div>").append("<span>").addClass("care-chat-widget__message typing");
      typing.appendTo($('.mCSB_container'));
      updateScrollbar();
      return setTimeout(function () {
        var msg;
        typing.remove();
        msg = $("<div>").addClass("care-chat-widget__message");
        msgText = fakeMsg[fakeNum];
        msgDetails = `<div class="care-chat-widget__message-text-block">
        <p class="care-chat-widget__message-text">` + msgText + `</p></div>`;
        msg.append(msgDetails);
        msg.addClass("care-chat-widget__message--vca").appendTo($('.mCSB_container'));
        setDate();
        updateScrollbar();

        // Special actions based on prompt mapping
        if (actionPrompts[msgText]) {
          actionPrompts[msgText]();
          // window.open(URL, '_blank');
        }

        return fakeNum++;
      }, 1000 + (Math.random() * 10) * 100);
    };

    insertMessage = function (e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('entered message');

      var msg, msgText;
      msgText = $("#chat-message-textarea-input").val();
      if ($.trim(msgText) === "") {
        return false;
      }
      msg = $("<div>").addClass("care-chat-widget__message care-chat-widget__message--user");
      msgDetails = `<div class="care-chat-widget__message-text-container">
        <div class="care-chat-widget__message-text-block">
            <p class="care-chat-widget__message-text">`+ msgText + `</p>
        </div>
        </div>`;
      msg.append(msgDetails);
      msg.addClass("care-chat-widget__message--user").appendTo($('.mCSB_container'));
      setDate();
      updateScrollbar();
      $("#chat-message-textarea-input").val(null);
      $(".care-chat-widget__message.care-chat-widget__message--user.typing").remove();
      isTyping = true;
      clearTimeout(uctTimer);
      if ($.trim(fakeMsg[fakeNum]) === "") {
        return false;
      }
      return setTimeout(function () {
        return setFakeMessage();
      }, 200 + (Math.random() * 10) * 100);
    };

    $(window).on('keydown', function (e) {
      if (e.which === 13) {
        insertMessage();
        return false;
      }
    });

    $(window).load(function () {
      messages.mCustomScrollbar();
      setTimeout(function () {
        return setFakeMessage();
      }, 100);
    });

    $("#chat-message-textarea-input").on("keydown", function (e) {
      var typing;
      if ($("#chat-message-textarea-input") !== "" && isTyping === true && e.which !== 13) {
        typing = $("<div>").append("<span>").addClass("care-chat-widget__message care-chat-widget__message--user typing");
        typing.appendTo($('.mCSB_container'));
        updateScrollbar();
        isTyping = false;
        return userTypingClear();
      }
    });

    sentButton.on('click', insertMessage);

    //}).call(this);
  });
}


