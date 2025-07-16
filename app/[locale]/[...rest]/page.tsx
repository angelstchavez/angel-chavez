"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  const t = useTranslations("notFoundPage");

  return (
    <div className="flex items-center justify-center p-6">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-12 h-12 bg-muted rounded-full mx-auto"></div>
        <div className="space-y-2">
          <h1 className="text-4xl font-medium text-muted-foreground">
            {t("title")}
          </h1>
          <p className="text-muted-foreground">{t("description")}</p>
        </div>
        <Button variant="link" onClick={() => (window.location.href = "/")}>
          {t("backToHome")}
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
