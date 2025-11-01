import { ShoppingCart, Ticket, Package, User, Phone, Info, CreditCard } from "lucide-react";
import ServiceCard from "./ServiceCard";
import ListItem from "./ListItem";

function MyAccount() {
  return (
    <>
      {/* services */}
      <section className="px-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-primary text-2xl font-medium">خدمات</h2>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <ServiceCard
            icon={<Ticket className="text-white" size={35} />}
            title="تیکت ها"
          />
          <ServiceCard
            icon={<Package className="text-white" size={35} />}
            title="سفارش ها"
          />
          <ServiceCard
            icon={<ShoppingCart className="text-white" size={35} />}
            title="سبد خرید"
          />
        </div>
      </section>

      {/* info list */}
      <section className="px-2">
        <h3 className="text-primary font-medium mb-4 text-2xl">اطلاعات</h3>

        <div className="flex flex-col gap-3">
          <ListItem
            href="/my-account/info"
            icon={<User className="w-5 h-5 text-primary" />}
            title="اطلاعات شخصی"
          />
          <ListItem
            href="/my-account/orders"
            icon={<Package className="w-5 h-5 text-primary" />}
            title="آخرین خرید ها"
          />
          <ListItem
            href="/my-account/check-status"
            icon={<CreditCard className="w-5 h-5 text-primary" />}
            title="وضعیت چک‌ها"
          />
          <ListItem
            href="/contact"
            icon={<Phone className="w-5 h-5 text-primary" />}
            title="تماس با ما"
          />
          <ListItem
            href="/about"
            icon={<Info className="w-5 h-5 text-primary" />}
            title="درباره ما"
          />
        </div>
      </section>
    </>
  );
}

export default MyAccount;
