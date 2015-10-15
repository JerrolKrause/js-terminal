//Creates a terminal application
//REQUIRES jquery terminal plugin
window.jkTerminal = (function() {
    'use strict';

    //Public Obj/vars
    var jkTerminal = {
        div: '#jk-terminal', //Selector for terminal application
        greeting: "\
       __                     __   __ __            \n\
      / /__  ______________  / /  / //_/_________ ___  __________ \n\
 __  / / _ \\/ ___/ ___/ __ \\/ /  / ,<  / ___/ __ `/ / / / ___/ _ \\\n\
/ /_/ /  __/ /  / /  / /_/ / /  / /| |/ /  / /_/ / /_/ (__  )  __/\n\
\\____/\\___/_/  /_/   \\____/_/  /_/ |_/_/   \\__,_/\\__,_/____/\\___/\n "
    };

    //Initialization options for the terminal
    jkTerminal.options = {
        greetings: jkTerminal.greeting,
        name: 'js_demo',
        height: 300,
        prompt: '> '};

    //List of available commands/actions with in the terminal
    jkTerminal.data = {
        //Menu items are NOT automatically generated, be sure to add them manually here
        menu: function() {
            this.echo();
            this.echo('<div class="jkt-row">| <div class="jkt-cmd">menu</div>- <div class="jkt-copy">This list of help commands</div></div>', {raw: true});
            this.echo();
            this.echo('<div class="jkt-row">| <div class="jkt-cmd">code_portfolio</div>- <div class="jkt-copy">View case studies and code examples</div></div>', {raw: true});
            this.echo('<div class="jkt-row">| <div class="jkt-cmd">design</div>- <div class="jkt-copy">View web design + UI/UX examples</div></div>', {raw: true});
            this.echo();
            this.echo('<div class="jkt-row">| <div class="jkt-cmd">contact</div>- <div class="jkt-copy">Contact me via web form</div></div>', {raw: true});
            this.echo('<div class="jkt-row">| <div class="jkt-cmd">linkedin</div>- <div class="jkt-copy">My LinkedIn profile</div></div>', {raw: true});
            this.echo('<div class="jkt-row">| <div class="jkt-cmd">github</div>- <div class="jkt-copy">My Githhub repository</div></div>', {raw: true});
            this.echo();
        },
        code_portfolio: function() {
            this.echo('Going to code portfolio...', {raw: true});
            window.location = '/code-portfolio/';
        },
        design: function() {
            this.echo('Going to design + UI/UX page...', {raw: true});
            window.location = '/web-user-interface-design/';
        },
        contact: function() {
            this.echo('Going to contact page...', {raw: true});
            window.location = '/contact-me/';
        },
        linkedin: function() {
            this.echo('Click to visit: <a href="https://www.linkedin.com/in/jerrolkrause">https://www.linkedin.com/in/jerrolkrause</a>', {raw: true});
        },
        github: function() {
            this.echo('Click to visit: <a href="https://github.com/JerrolKrause">https://github.com/JerrolKrause</a>', {raw: true});
        }
    };


    /**
     * Initialize and start the terminal application
     * @returns {undefined}
     */
    jkTerminal.init = function() {
        jkTerminal.app = $(jkTerminal.div).terminal(jkTerminal.data, jkTerminal.options);
        jkTerminal.app.echo('Hi, I\'m Jerrol Krause. I\'m a front-end developer and designer from Irvine California.', {raw: true});
        jkTerminal.app.echo('Please type "<span class="jkt-cmd">menu</span>" for a list of available commands or just browse my website :)', {raw: true});
    };

    //Ensure DOM is loaded
    $(document).ready(function() {
        //Start the application
        jkTerminal.init();
    });
    
    //Return public data
    return jkTerminal;
})();