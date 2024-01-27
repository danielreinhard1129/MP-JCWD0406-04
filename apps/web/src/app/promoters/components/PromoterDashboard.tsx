import SidebarPromoter from './SidebarPromoter';

const PromoterDashboard = () => {
  return (
    <section className="flex w-full ">
      <SidebarPromoter activeLink={'dashboard'} />
      <h1>Dasboard</h1>
    </section>
  );
};

export default PromoterDashboard;
