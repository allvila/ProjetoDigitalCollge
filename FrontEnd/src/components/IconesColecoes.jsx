import React from 'react';
import { Shirt, Umbrella, Headphones, Footprints, Icon } from "lucide-react";
import { trousers } from "@lucide/lab";

const CamisetaIcon = () => <Shirt className="h-6 w-6" />;
const CalcaIcon = () => <Icon iconNode={trousers} className="h-6 w-6" />;
const BoneIcon = () => <Umbrella className="h-6 w-6" />;
const FoneIcon = () => <Headphones className="h-6 w-6" />;
const TenisIcon = () => <Footprints className="h-6 w-6" />;

export { CamisetaIcon, CalcaIcon, BoneIcon, FoneIcon, TenisIcon };