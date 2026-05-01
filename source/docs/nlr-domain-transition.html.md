---
title: NLR.gov Domain Transition
hidden_child: true
hide_domain_transition_link: true
---

# NLR.gov Domain Transition

The National Laboratory of the Rockies (NLR) is retiring the `nrel.gov` domain near the end of May and transitioning to the new `nlr.gov` domain.

**To avoid an interruption in service, you need to update your API calls to use the new `developer.nlr.gov` URLs by April 30, 2026**, or by May 29, 2026, with short outages scheduled in May before the old domain expires. Your existing API key will continue to work—only the domain in the URL needs to be updated.

Here is a timeline for this domain change:

- **March 2, 2026:** The new `developer.nlr.gov` domain became available to use and begin switching API calls to the new URLs. Emails were sent to all API key owners having made requests in the past year to announce the domain change.
- **April 15, 2026:** Additional reminder emails were sent to API key owners that had not transitioned to the new domain yet.
- **May 1, 2026:** Periodic brownouts (scheduled outages for short durations) will begin where traffic to the old `developer.nrel.gov` domain will return errors with instructions about using the new domain. Traffic already switched to the new `developer.nlr.gov` domain will not be affected.
    - During each brownout period, API requests will return a `410 Gone` HTTP error with a message about the domain change.
    - Scheduled outages will occur during the following times:

        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Brownout Date</th>
              <th>Brownout Start Time</th>
              <th>Brownout End Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>Fri, 01 May 2026</code></td>
              <td><code>09:00:00 PM EDT</code></td>
              <td><code>09:30:00 PM EDT</code></td>
            </tr>
            <tr>
              <td><code>Sun, 03 May 2026</code></td>
              <td><code>09:00:00 PM EDT</code></td>
              <td><code>09:30:00 PM EDT</code></td>
            </tr>
            <tr>
              <td><code>Tue, 05 May 2026</code></td>
              <td><code>09:00:00 PM EDT</code></td>
              <td><code>10:00:00 PM EDT</code></td>
            </tr>
            <tr>
              <td><code>Thu, 07 May 2026</code></td>
              <td><code>09:00:00 PM EDT</code></td>
              <td><code>10:00:00 PM EDT</code></td>
            </tr>
            <tr>
              <td><code>Sun, 10 May 2026</code></td>
              <td><code>04:00:00 PM EDT</code></td>
              <td><code>05:00:00 PM EDT</code></td>
            </tr>
            <tr>
              <td><code>Tue, 12 May 2026</code></td>
              <td><code>11:00:00 AM EDT</code></td>
              <td><code>11:15:00 AM EDT</code></td>
            </tr>
            <tr>
              <td><code>Wed, 13 May 2026</code></td>
              <td><code>04:00:00 PM EDT</code></td>
              <td><code>04:15:00 PM EDT</code></td>
            </tr>
            <tr>
              <td><code>Wed, 13 May 2026</code></td>
              <td><code>09:00:00 PM EDT</code></td>
              <td><code>10:00:00 PM EDT</code></td>
            </tr>
            <tr>
              <td><code>Wed, 13 May 2026</code></td>
              <td><code>01:00:00 PM EDT</code></td>
              <td><code>01:15:00 PM EDT</code></td>
            </tr>
            <tr>
              <td><code>Sat, 16 May 2026</code></td>
              <td><code>03:00:00 PM EDT</code></td>
              <td><code>05:00:00 PM EDT</code></td>
            </tr>
            <tr>
              <td><code>Mon, 18 May 2026</code></td>
              <td><code>10:00:00 AM EDT</code></td>
              <td><code>10:15:00 AM EDT</code></td>
            </tr>
            <tr>
              <td><code>Tue, 19 May 2026</code></td>
              <td><code>11:00:00 AM EDT</code></td>
              <td><code>11:15:00 AM EDT</code></td>
            </tr>
            <tr>
              <td><code>Wed, 20 May 2026</code></td>
              <td><code>12:00:00 PM EDT</code></td>
              <td><code>12:15:00 PM EDT</code></td>
            </tr>
            <tr>
              <td><code>Thu, 21 May 2026</code></td>
              <td><code>01:00:00 PM EDT</code></td>
              <td><code>01:30:00 PM EDT</code></td>
            </tr>
            <tr>
              <td><code>Fri, 22 May 2026</code></td>
              <td><code>02:00:00 PM EDT</code></td>
              <td><code>02:30:00 PM EDT</code></td>
            </tr>
            <tr>
              <td><code>Sat, 23 May 2026</code></td>
              <td><code>01:00:00 PM EDT</code></td>
              <td><code>04:00:00 PM EDT</code></td>
            </tr>
            <tr>
              <td><code>Sun, 24 May 2026</code></td>
              <td><code>12:00:00 PM EDT</code></td>
              <td><code>03:00:00 PM EDT</code></td>
            </tr>
            <tr>
              <td><code>Mon, 25 May 2026</code></td>
              <td><code>09:00:00 AM EDT</code></td>
              <td><code>11:00:00 AM EDT</code></td>
            </tr>
            <tr>
              <td><code>Tue, 26 May 2026</code></td>
              <td><code>11:00:00 AM EDT</code></td>
              <td><code>01:00:00 PM EDT</code></td>
            </tr>
            <tr>
              <td><code>Wed, 27 May 2026</code></td>
              <td><code>01:00:00 PM EDT</code></td>
              <td><code>03:00:00 PM EDT</code></td>
            </tr>
            <tr>
              <td><code>Thu, 28 May 2026</code></td>
              <td><code>03:00:00 PM EDT</code></td>
              <td><code>05:00:00 PM EDT</code></td>
            </tr>
          </tbody>
        </table>

- **May 29, 2026:** The `developer.nrel.gov` domain will expire and stop working completely. DNS for the `nrel.gov` domain and all subdomains will cease to resolve and will not redirect.
