# User Story: Cart Inventory Guardrails

## Story

As a shopper, I want the cart to stop me from adding more units than are available in stock so that I do not place an order the store cannot fulfil.

## Acceptance Criteria

1. Product detail pages show the available stock count for the selected product or variant.
2. Shoppers cannot add an item to the cart when the selected product or variant has zero available stock.
3. Shoppers cannot increase cart quantity beyond the selected product or variant stock count.
4. The backend enforces stock limits for both base products and product variants, even if the frontend sends a manual request.
5. When a shopper reaches the stock limit, the UI shows a clear message instead of silently failing.
6. Automated tests cover stock limit behavior for base products, variants, and direct API requests.

## Notes For Reviewers

This story is intended for the CSQA AgentiX pull request risk review exercise. The implementation branch intentionally contains issues. Review agents should compare the code against the acceptance criteria, inspect related frontend and backend paths, run available checks where possible, and report evidence-backed findings without approving or merging.
