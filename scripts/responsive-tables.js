/**
 * Responsive RTE tables
 *
 * Usage:
 *   import {responsiveTables} from '@elkfox/shopify-theme/scripts/responsive-tables';
 *
 *   responsiveTables();
 */

export function responsiveTables() {
  const rteTables = document.querySelectorAll('.rte table');

  [].forEach.call(rteTables, (table) => {
    table.classList.add('responsive-table');
  });
}
