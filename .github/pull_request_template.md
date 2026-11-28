## Summary

<!-- What this PR changes and why. Link the Jira ticket. -->

## How to test

<!-- Steps a reviewer can follow to check the change. -->

## Security

- [ ] New or changed routes: auth middleware or explicit `public` + reason
- [ ] Request ids are loaded scoped to the caller's restaurant/owner
- [ ] Outbound calls: path params encoded, host allowlisted
- [ ] No secret or personal data in responses or logs; no raw HTML sink
- [ ] N/A: no route, auth, outbound call or rendering change

## Notes

<!-- Anything else a reviewer should know: trade-offs, follow-ups, screenshots. -->
