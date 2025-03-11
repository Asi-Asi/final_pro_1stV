import PropTypes from "prop-types";
import { cn } from "@/lib/utils"

function Card({className, ...props})
{
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props} />
  );
}
Card.propTypes = { className: PropTypes.string };


function CardHeader({className, ...props}) 
{
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5 px-6", className)}
      {...props} />
  );
}
CardHeader.propTypes = { className: PropTypes.string };

function CardTitle({className, ...props})
{
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props} />
  );
}

CardTitle.propTypes = { className: PropTypes.string };


function CardDescription({className, ...props}) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props} />
  );
}

CardDescription.propTypes = { className: PropTypes.string };



function CardContent({className, ...props}) 
{
  return (<div data-slot="card-content" className={cn("px-6", className)} {...props} />);
}

CardContent.propTypes = { className: PropTypes.string };



function CardFooter({className, ...props})
{
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6", className)}
      {...props} />
  );
}

CardFooter.propTypes = { className: PropTypes.string };

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
