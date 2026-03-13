// ==UserScript==
// @name         Open in Hack for Hacker News App
// @namespace    http://tampermonkey.net/
// @version      1.0.3 // Incrementing version for the run-at change
// @description  Redirects Hacker News links from news.ycombinator.com and matched search results (including hckrnews.com) to the Hack for Hacker News iOS app using its URL scheme (hack://) as early as possible on news.ycombinator.com.
// @author       Your Name (based on AnthonyGress's work)
// @match        *://news.ycombinator.com/*
// @match        *://hckrnews.com/*
// @match        *://hn.unlurker.com/*
// @match        *://*.yahoo.com/*
// @match        *://*.bing.com/*
// @match        *://*.duckduckgo.com/*
// @match        *://*.ecosia.org/*
// @match        *://*.google.com/*
// @match        *://*.google.ad/*
// @match        *://*.google.ae/*
// @match        *://*.google.com.af/*
// @match        *://*.google.com.ag/*
// @match        *://*.google.al/*
// @match        *://*.google.am/*
// @match        *://*.google.co.ao/*
// @match        *://*.google.com.ar/*
// @match        *://*.google.as/*
// @match        *://*.google.at/*
// @match        *://*.google.com.au/*
// @match        *://*.google.az/*
// @match        *://*.google.ba/*
// @match        *://*.google.com.bd/*
// @match        *://*.google.be/*
// @match        *://*.google.bf/*
// @match        *://*.google.bg/*
// @match        *://*.google.com.bh/*
// @match        *://*.google.bi/*
// @match        *://*.google.bj/*
// @match        *://*.google.com.bn/*
// @match        *://*.google.com.bo/*
// @match        *://*.google.com.br/*
// @match        *://*.google.bs/*
// @match        *://*.google.bt/*
// @match        *://*.google.co.bw/*
// @match        *://*.google.by/*
// @match        *://*.google.com.bz/*
// @match        *://*.google.ca/*
// @match        *://*.google.cd/*
// @match        *://*.google.cf/*
// @match        *://*.google.cg/*
// @match        *://*.google.ch/*
// @match        *://*.google.ci/*
// @match        *://*.google.co.ck/*
// @match        *://*.google.cl/*
// @match        *://*.google.cm/*
// @match        *://*.google.cn/*
// @match        *://*.google.com.co/*
// @match        *://*.google.co.cr/*
// @match        *://*.google.com.cu/*
// @match        *://*.google.cv/*
// @match        *://*.google.com.cy/*
// @match        *://*.google.cz/*
// @match        *://*.google.de/*
// @match        *://*.google.dj/*
// @match        *://*.google.dk/*
// @match        *://*.google.dm/*
// @match        *://*.google.com.do/*
// @match        *://*.google.dz/*
// @match        *://*.google.com.ec/*
// @match        *://*.google.ee/*
// @match        *://*.google.com.eg/*
// @match        *://*.google.es/*
// @match        *://*.google.com.et/*
// @match        *://*.google.fi/*
// @match        *://*.google.com.fj/*
// @match        *://*.google.fm/*
// @match        *://*.google.fr/*
// @match        *://*.google.ga/*
// @match        *://*.google.ge/*
// @match        *://*.google.gg/*
// @match        *://*.google.com.gh/*
// @match        *://*.google.com.gi/*
// @match        *://*.google.gl/*
// @match        *://*.google.gm/*
// @match        *://*.google.gr/*
// @match        *://*.google.com.gt/*
// @match        *://*.google.gy/*
// @match        *://*.google.com.hk/*
// @match        *://*.google.hn/*
// @match        *://*.google.hr/*
// @match        *://*.google.ht/*
// @match        *://*.google.hu/*
// @match        *://*.google.co.id/*
// @match        *://*.google.ie/*
// @match        *://*.google.co.il/*
// @match        *://*.google.im/*
// @match        *://*.google.co.in/*
// @match        *://*.google.iq/*
// @match        *://*.google.is/*
// @match        *://*.google.it/*
// @match        *://*.google.je/*
// @match        *://*.google.com.jm/*
// @match        *://*.google.jo/*
// @match        *://*.google.co.jp/*
// @match        *://*.google.co.ke/*
// @match        *://*.google.com.kh/*
// @match        *://*.google.ki/*
// @match        *://*.google.kg/*
// @match        *://*.google.co.kr/*
// @match        *://*.google.com.kw/*
// @match        *://*.google.kz/*
// @match        *://*.google.la/*
// @match        *://*.google.com.lb/*
// @match        *://*.google.li/*
// @match        *://*.google.lk/*
// @match        *://*.google.co.ls/*
// @match        *://*.google.lt/*
// @match        *://*.google.lu/*
// @match        *://*.google.lv/*
// @match        *://*.google.com.ly/*
// @match        *://*.google.co.ma/*
// @match        *://*.google.md/*
// @match        *://*.google.me/*
// @match        *://*.google.mg/*
// @match        *://*.google.mk/*
// @match        *://*.google.ml/*
// @match        *://*.google.com.mm/*
// @match        *://*.google.mn/*
// @match        *://*.google.com.mt/*
// @match        *://*.google.mu/*
// @match        *://*.google.mv/*
// @match        *://*.google.mw/*
// @match        *://*.google.com.mx/*
// @match        *://*.google.com.my/*
// @match        *://*.google.co.mz/*
// @match        *://*.google.com.na/*
// @match        *://*.google.com.ng/*
// @match        *://*.google.com.ni/*
// @match        *://*.google.ne/*
// @match        *://*.google.nl/*
// @match        *://*.google.no/*
// @match        *://*.google.com.np/*
// @match        *://*.google.nr/*
// @match        *://*.google.nu/*
// @match        *://*.google.co.nz/*
// @match        *://*.google.com.om/*
// @match        *://*.google.com.pa/*
// @match        *://*.google.com.pe/*
// @match        *://*.google.com.pg/*
// @match        *://*.google.com.ph/*
// @match        *://*.google.com.pk/*
// @match        *://*.google.pl/*
// @match        *://*.google.pn/*
// @match        *://*.google.com.pr/*
// @match        *://*.google.ps/*
// @match        *://*.google.pt/*
// @match        *://*.google.com.py/*
// @match        *://*.google.com.qa/*
// @match        *://*.google.ro/*
// @match        *://*.google.ru/*
// @match        *://*.google.rw/*
// @match        *://*.google.com.sa/*
// @match        *://*.google.com.sb/*
// @match        *://*.google.sc/*
// @match        *://*.google.se/*
// @match        *://*.google.com.sg/*
// @match        *://*.google.sh/*
// @match        *://*.google.si/*
// @match        *://*.google.sk/*
// @match        *://*.google.com.sl/*
// @match        *://*.google.sn/*
// @match        *://*.google.so/*
// @match        *://*.google.sm/*
// @match        *://*.google.sr/*
// @match        *://*.google.st/*
// @match        *://*.google.com.sv/*
// @match        *://*.google.td/*
// @match        *://*.google.tg/*
// @match        *://*.google.co.th/*
// @match        *://*.google.com.tj/*
// @match        *://*.google.tl/*
// @match        *://*.google.tm/*
// @match        *://*.google.tn/*
// @match        *://*.google.to/*
// @match        *://*.google.com.tr/*
// @match        *://*.google.tt/*
// @match        *://*.google.com.tw/*
// @match        *://*.google.co.tz/*
// @match        *://*.google.com.ua/*
// @match        *://*.google.co.ug/*
// @match        *://*.google.co.uk/*
// @match        *://*.google.com.uy/*
// @match        *://*.google.co.uz/*
// @match        *://*.google.com.vc/*
// @match        *://*.google.co.ve/*
// @match        *://*.google.co.vi/*
// @match        *://*.google.com.vn/*
// @match        *://*.google.vu/*
// @match        *://*.google.ws/*
// @match        *://*.google.rs/*
// @match        *://*.google.co.za/*
// @match        *://*.google.co.zm/*
// @match        *://*.google.co.zw/*
// @match        *://*.google.cat/*
// @run-at       document_start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const HN_HOST = 'news.ycombinator.com';
    const APP_SCHEME = 'hack://';

    /**
     * Converts a Hacker News web URL to a Hack app URL scheme URL.
     * @param {string} webUrlString - The web URL (e.g., 'https://news.ycombinator.com/item?id=123').
     * @returns {string|null} The app URL (e.g., 'hack://item?id=123') or null if not an HN URL.
     */
    function convertToHackUrl(webUrlString) {
        try {
            const url = new URL(webUrlString);

            // Check if it's a Hacker News domain
            // Use endsWith for subdomains (like www.news.ycombinator.com, though not common for HN)
            if (!url.hostname || (url.hostname !== HN_HOST && !url.hostname.endsWith(`.${HN_HOST}`))) {
                return null;
            }

            // Special case for the root path '/' - it should become just 'hack://'
             if (url.pathname === '/' && url.search === '') {
                 return APP_SCHEME;
             } else {
                 // For other paths like /item, /user, /newest, etc.
                 // We need to remove the leading slash from url.pathname when appending to hack://
                 const pathWithoutLeadingSlash = url.pathname.substring(1);
                 return `${APP_SCHEME}${pathWithoutLeadingSlash}${url.search}`;
             }

        } catch (e) {
            // Handle potential errors if URL parsing fails (e.g., invalid URL string)
            console.error('Hack Userscript: Error parsing or converting URL:', webUrlString, e);
            return null;
        }
    }

    /**
     * Attempts to open the current page URL in the Hack app.
     * Called when the user lands directly on a news.ycombinator.com page.
     */
    function openCurrentPageInHack() {
        const hackUrl = convertToHackUrl(window.location.href);
        if (hackUrl) {
            console.log('Hack Userscript: Attempting to open current page in app:', hackUrl);
            // Use replace to prevent the web page from being in the browser history
            window.location.replace(hackUrl);
        } else {
             // This case shouldn't be hit if the @match is correct for HN domain,
             // or it means convertToHackUrl returned null (e.g., malformed HN URL).
             console.log('Hack Userscript: Current page is not a convertible HN URL:', window.location.href);
        }
    }

    /**
     * Processes links on the page (e.g., search results, hckrnews.com listings)
     * to redirect them to the Hack app.
     */
    function processLinksForHack() {
        // Select all links that have an href attribute and haven't been processed by this script before
        document.querySelectorAll('a[href]:not([data-hack-listener-added])').forEach(link => {
            const href = link.href;
            if (!href) return; // Skip links without an href

            // Quick check if the link's href string contains the HN host.
            if (!href.includes(HN_HOST)) {
                 return; // Skip non-HN links early
            }

            // Now attempt to convert the potentially HN link
            const hackUrl = convertToHackUrl(href);

            if (hackUrl) {
                // Mark the link so we don't add duplicate listeners
                link.setAttribute('data-hack-listener-added', 'true');

                // Add a click listener to intercept the default link navigation
                link.addEventListener('click', (event) => {
                    console.log('Hack Userscript: Intercepting click for app URL:', hackUrl);
                    event.preventDefault(); // Stop the browser from following the original href
                    event.stopPropagation(); // Prevent the click from triggering other elements

                    // Redirect the browser to the hack:// URL scheme
                    window.location.href = hackUrl;
                }, { capture: true }); // 'capture: true' means this listener runs during the capture phase
            }
        });
    }

    // --- Main Execution Logic ---

    // Check if the current page's hostname is news.ycombinator.com
    // This check must happen *immediately* when the script runs at document_start
    if (window.location.hostname === HN_HOST || window.location.hostname.endsWith(`.${HN_HOST}`)) {
        // If we are directly on a Hacker News web page, attempt to open it in the app.
        // Since we are at document_start, this redirect should happen very early.
        openCurrentPageInHack();
        // Important: After calling openCurrentPageInHack(), the script's execution
        // will likely stop or become irrelevant as the browser navigates away.
        // No need to proceed further for this case.
        return; // Exit the userscript execution for this page
    }

    // If we are NOT on news.ycombinator.com (e.g., on a search engine or hckrnews.com),
    // we proceed to process links and observe for new ones. This part still needs
    // the DOM to be somewhat ready, so running this logic later is fine and necessary.

    // Process links already present in the DOM
    processLinksForHack();

    // Set up a MutationObserver to handle links that are loaded or added dynamically
    const observer = new MutationObserver((mutations) => {
        processLinksForHack();
    });

    // Start observing the document body for changes
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();