---
title: NLR.gov Domain Transition
hidden_child: true
hide_domain_transition_link: true
---

# NLR.gov Domain Transition

The National Laboratory of the Rockies (NLR) retired the `nrel.gov` domain on May 29, 2026, after transitioning to the new `nlr.gov` domain.

**If you have not already, you need to update your API calls to use the new `developer.nlr.gov` URLs.** Your existing API key will continue to work—only the domain in the URL needs to be updated.

Here is a timeline for this domain change:

- **March 2, 2026:** The new `developer.nlr.gov` domain became available to use and begin switching API calls to the new URLs. Emails were sent to all API key owners having made requests in the past year to announce the domain change.
- **April 15, 2026:** Additional reminder emails were sent to API key owners that had not transitioned to the new domain yet.
- **May 1, 2026:** Periodic brownouts (scheduled outages for short durations) began where traffic to the old `developer.nrel.gov` domain returned errors with instructions about using the new domain. Traffic already switched to the new `developer.nlr.gov` domain was not affected.
    - During each brownout period, API requests returned a `410 Gone` HTTP error with a message about the domain change.
    - Scheduled outages occurred during the following times:

        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Brownout Start</th>
              <th>Brownout End</th>
              <th>Brownout Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>Fri, 01 May 2026, 09:00:00 PM EDT</code></td>
              <td><code>Fri, 01 May 2026, 10:00:00 PM EDT</code></td>
              <td><code>60m</code></td>
            </tr>
            <tr>
              <td><code>Sat, 02 May 2026, 06:00:00 PM EDT</code></td>
              <td><code>Sat, 02 May 2026, 07:00:00 PM EDT</code></td>
              <td><code>60m</code></td>
            </tr>
            <tr>
              <td><code>Sun, 03 May 2026, 08:00:00 AM EDT</code></td>
              <td><code>Sun, 03 May 2026, 09:00:00 AM EDT</code></td>
              <td><code>60m</code></td>
            </tr>
            <tr>
              <td><code>Mon, 04 May 2026, 11:00:00 AM EDT</code></td>
              <td><code>Mon, 04 May 2026, 11:15:00 AM EDT</code></td>
              <td><code>15m</code></td>
            </tr>
            <tr>
              <td><code>Tue, 05 May 2026, 09:00:00 PM EDT</code></td>
              <td><code>Tue, 05 May 2026, 10:00:00 PM EDT</code></td>
              <td><code>60m</code></td>
            </tr>
            <tr>
              <td><code>Wed, 06 May 2026, 01:00:00 PM EDT</code></td>
              <td><code>Wed, 06 May 2026, 01:15:00 PM EDT</code></td>
              <td><code>15m</code></td>
            </tr>
            <tr>
              <td><code>Thu, 07 May 2026, 09:00:00 PM EDT</code></td>
              <td><code>Thu, 07 May 2026, 10:00:00 PM EDT</code></td>
              <td><code>60m</code></td>
            </tr>
            <tr>
              <td><code>Fri, 08 May 2026, 03:00:00 PM EDT</code></td>
              <td><code>Fri, 08 May 2026, 03:15:00 PM EDT</code></td>
              <td><code>15m</code></td>
            </tr>
            <tr>
              <td><code>Sat, 09 May 2026, 12:00:00 PM EDT</code></td>
              <td><code>Sat, 09 May 2026, 01:00:00 PM EDT</code></td>
              <td><code>60m</code></td>
            </tr>
            <tr>
              <td><code>Sun, 10 May 2026, 04:00:00 PM EDT</code></td>
              <td><code>Sun, 10 May 2026, 05:00:00 PM EDT</code></td>
              <td><code>60m</code></td>
            </tr>
            <tr>
              <td><code>Mon, 11 May 2026, 09:30:00 AM EDT</code></td>
              <td><code>Mon, 11 May 2026, 09:45:00 AM EDT</code></td>
              <td><code>15m</code></td>
            </tr>
            <tr>
              <td><code>Tue, 12 May 2026, 11:30:00 AM EDT</code></td>
              <td><code>Tue, 12 May 2026, 11:45:00 AM EDT</code></td>
              <td><code>15m</code></td>
            </tr>
            <tr>
              <td><code>Wed, 13 May 2026, 01:30:00 PM EDT</code></td>
              <td><code>Wed, 13 May 2026, 01:45:00 PM EDT</code></td>
              <td><code>15m</code></td>
            </tr>
            <tr>
              <td><code>Wed, 13 May 2026, 09:00:00 PM EDT</code></td>
              <td><code>Wed, 13 May 2026, 10:00:00 PM EDT</code></td>
              <td><code>60m</code></td>
            </tr>
            <tr>
              <td><code>Thu, 14 May 2026, 03:30:00 PM EDT</code></td>
              <td><code>Thu, 14 May 2026, 03:45:00 PM EDT</code></td>
              <td><code>15m</code></td>
            </tr>
            <tr>
              <td><code>Fri, 15 May 2026, 05:30:00 PM EDT</code></td>
              <td><code>Fri, 15 May 2026, 05:45:00 PM EDT</code></td>
              <td><code>15m</code></td>
            </tr>
            <tr>
              <td><code>Sat, 16 May 2026, 03:00:00 PM EDT</code></td>
              <td><code>Sat, 16 May 2026, 05:00:00 PM EDT</code></td>
              <td><code>120m</code></td>
            </tr>
            <tr>
              <td><code>Sun, 17 May 2026, 03:00:00 PM EDT</code></td>
              <td><code>Sun, 17 May 2026, 05:00:00 PM EDT</code></td>
              <td><code>120m</code></td>
            </tr>
            <tr>
              <td><code>Mon, 18 May 2026, 10:00:00 AM EDT</code></td>
              <td><code>Mon, 18 May 2026, 10:30:00 AM EDT</code></td>
              <td><code>30m</code></td>
            </tr>
            <tr>
              <td><code>Tue, 19 May 2026, 11:30:00 AM EDT</code></td>
              <td><code>Tue, 19 May 2026, 12:00:00 PM EDT</code></td>
              <td><code>30m</code></td>
            </tr>
            <tr>
              <td><code>Wed, 20 May 2026, 12:00:00 PM EDT</code></td>
              <td><code>Wed, 20 May 2026, 12:30:00 PM EDT</code></td>
              <td><code>30m</code></td>
            </tr>
            <tr>
              <td><code>Thu, 21 May 2026, 01:00:00 PM EDT</code></td>
              <td><code>Thu, 21 May 2026, 01:45:00 PM EDT</code></td>
              <td><code>45m</code></td>
            </tr>
            <tr>
              <td><code>Fri, 22 May 2026, 02:00:00 PM EDT</code></td>
              <td><code>Fri, 22 May 2026, 02:45:00 PM EDT</code></td>
              <td><code>45m</code></td>
            </tr>
            <tr>
              <td><code>Fri, 22 May 2026, 09:00:00 PM EDT</code></td>
              <td><code>Sat, 23 May 2026, 02:00:00 AM EDT</code></td>
              <td><code>300m</code></td>
            </tr>
            <tr>
              <td><code>Sat, 23 May 2026, 01:00:00 PM EDT</code></td>
              <td><code>Sat, 23 May 2026, 04:00:00 PM EDT</code></td>
              <td><code>180m</code></td>
            </tr>
            <tr>
              <td><code>Sun, 24 May 2026, 12:00:00 PM EDT</code></td>
              <td><code>Sun, 24 May 2026, 03:00:00 PM EDT</code></td>
              <td><code>180m</code></td>
            </tr>
            <tr>
              <td><code>Mon, 25 May 2026, 02:00:00 AM EDT</code></td>
              <td><code>Mon, 25 May 2026, 07:00:00 AM EDT</code></td>
              <td><code>300m</code></td>
            </tr>
            <tr>
              <td><code>Mon, 25 May 2026, 11:00:00 AM EDT</code></td>
              <td><code>Mon, 25 May 2026, 12:00:00 PM EDT</code></td>
              <td><code>60m</code></td>
            </tr>
            <tr>
              <td><code>Tue, 26 May 2026, 07:00:00 AM EDT</code></td>
              <td><code>Tue, 26 May 2026, 12:00:00 PM EDT</code></td>
              <td><code>300m</code></td>
            </tr>
            <tr>
              <td><code>Tue, 26 May 2026, 02:00:00 PM EDT</code></td>
              <td><code>Tue, 26 May 2026, 03:00:00 PM EDT</code></td>
              <td><code>60m</code></td>
            </tr>
            <tr>
              <td><code>Wed, 27 May 2026, 07:00:00 AM EDT</code></td>
              <td><code>Wed, 27 May 2026, 08:00:00 AM EDT</code></td>
              <td><code>60m</code></td>
            </tr>
            <tr>
              <td><code>Wed, 27 May 2026, 12:00:00 PM EDT</code></td>
              <td><code>Wed, 27 May 2026, 05:00:00 PM EDT</code></td>
              <td><code>300m</code></td>
            </tr>
            <tr>
              <td><code>Thu, 28 May 2026, 11:00:00 AM EDT</code></td>
              <td><code>Thu, 28 May 2026, 12:00:00 PM EDT</code></td>
              <td><code>60m</code></td>
            </tr>
            <tr>
              <td><code>Thu, 28 May 2026, 05:00:00 PM EDT</code></td>
              <td><code>Fri, 29 May 2026, 12:00:00 AM EDT</code></td>
              <td><code>420m</code></td>
            </tr>
          </tbody>
        </table>

- **May 29, 2026:** The `developer.nrel.gov` domain expired and stopped working completely. DNS for the `nrel.gov` domain and all subdomains ceased to resolve and will not redirect.
