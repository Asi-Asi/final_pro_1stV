import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

/* eslint-disable */

function Progress({ className, value, markers = [], max = 100, ...props }) {
  // מציאת נקודת ה-Current וה-Goal
  const currentMarker = markers.find((m) => m.label === "Current");
  const goalMarker = markers.find((m) => m.label === "Goal");

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      {/* פס ההתקדמות */}
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full flex-1 transition-all"
        style={{
          backgroundColor: "var(--progress-color)",
          width: `${(value / max) * 100}%`,
        }}
      />

      {/* נקודות (סמנים) */}
      {markers.map((marker, index) => {
        let leftPosition = `calc(${(marker.value / max) * 100}% - 6px)`;

        // אם הנקודה היא Goal וערכה קטן מה-Current, השאר אותה ב-100%
        if (marker.label === "Goal" && goalMarker?.value < currentMarker?.value) {
          leftPosition = `calc(100% - 6px)`;
        }

        return (
          <div
            key={index}
            className="absolute h-3 w-3 rounded-full"
            style={{
              backgroundColor: marker.color,
              left: leftPosition,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        );
      })}
    </ProgressPrimitive.Root>
  );
}

export { Progress };
